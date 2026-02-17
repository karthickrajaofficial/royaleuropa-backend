import express from "express";
import Category from "../models/Category.js"; // Added .js extension
import slugify from "slugify"; 

const router = express.Router();

// Helper function to generate unique slugs
function generateUniqueSlug(name, existingSlugs = []) {
  let baseSlug = slugify(name, { lower: true, strict: true });
  let slug = baseSlug;
  let counter = 1;
  
  while (existingSlugs.includes(slug)) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  
  return slug;
}

// GET all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find().sort({ sortOrder: 1, createdAt: -1 });
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
});

// GET single category
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    
    res.json(category);
  } catch (error) {
    console.error('Error fetching category:', error);
    if (error.name === 'CastError') {
      return res.status(400).json({ error: "Invalid category ID format" });
    }
    res.status(500).json({ error: "Failed to fetch category" });
  }
});

// CREATE new category
router.post("/", async (req, res) => {
  try {
    console.log("📥 Incoming Create Category Request:", req.body);

    // Generate slug if not provided
    let slug = req.body.slug;
    if (!slug && req.body.name) {
      // Check existing slugs to ensure uniqueness
      const existingCategories = await Category.find({}, 'slug');
      const existingSlugs = existingCategories.map(cat => cat.slug);
      slug = generateUniqueSlug(req.body.name, existingSlugs);
    }

    const newCategory = new Category({
      name: req.body.name,
      description: req.body.description || '',
      image: req.body.image || '',
      slug: slug,
      subcategories: req.body.subcategories || [],
      isActive: req.body.isActive !== undefined ? req.body.isActive : true,
      sortOrder: req.body.sortOrder || 0,
      metaTitle: req.body.metaTitle || '',
      metaDescription: req.body.metaDescription || '',
      metaKeywords: req.body.metaKeywords || '',
    });

    await newCategory.save();
    res.status(201).json(newCategory);

  } catch (error) {
    console.error("💥 CREATE CATEGORY ERROR:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        error: "Validation failed",
        details: Object.values(error.errors).map(e => e.message),
      });
    }

    if (error.code === 11000) {
      // Duplicate key error
      const field = Object.keys(error.keyPattern)[0];
      return res.status(400).json({
        error: `Category with this ${field} already exists`
      });
    }

    res.status(500).json({ error: "Failed to create category", details: error.message });
  }
});

// UPDATE category
router.put("/:id", async (req, res) => {
  try {
    console.log("=== 🚀 UPDATE CATEGORY REQUEST START ===");
    console.log("📋 Category ID:", req.params.id);
    console.log("📥 req.body received by backend:", req.body);

    // Check if category exists
    const existingCategory = await Category.findById(req.params.id);
    if (!existingCategory) {
      console.log("❌ Category not found");
      return res.status(404).json({ error: "Category not found" });
    }

    console.log("📊 BEFORE UPDATE:", existingCategory.name, existingCategory.updatedAt);

    // Handle slug generation if name changed
    let updateData = { ...req.body };
    if (req.body.name && req.body.name !== existingCategory.name && !req.body.slug) {
      const existingCategories = await Category.find({ _id: { $ne: req.params.id } }, 'slug');
      const existingSlugs = existingCategories.map(cat => cat.slug);
      updateData.slug = generateUniqueSlug(req.body.name, existingSlugs);
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { 
        $set: {
          ...updateData,
          updatedAt: new Date()
        }
      },
      { 
        new: true,
        runValidators: true,
      }
    );

    if (!updatedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }

    console.log("📈 AFTER UPDATE:", updatedCategory.name, updatedCategory.updatedAt);
    console.log("=== ✅ UPDATE CATEGORY REQUEST COMPLETE ===");

    res.json(updatedCategory);

  } catch (error) {
    console.error("💥 UPDATE CATEGORY ERROR:", error.message);
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        error: "Validation failed",
        details: Object.values(error.errors).map(e => e.message)
      });
    }

    if (error.name === 'CastError') {
      return res.status(400).json({ error: "Invalid category ID format" });
    }

    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(400).json({
        error: `Category with this ${field} already exists`
      });
    }

    res.status(500).json({ error: "Server error" });
  }
});

// DELETE category
router.delete("/:id", async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);

    if (!deletedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error('Error deleting category:', error);
    if (error.name === 'CastError') {
      return res.status(400).json({ error: "Invalid category ID format" });
    }
    res.status(500).json({ error: "Failed to delete category" });
  }
});

// DUPLICATE category
router.post("/duplicate/:id", async (req, res) => {
  try {
    const originalCategory = await Category.findById(req.params.id);
    if (!originalCategory) {
      return res.status(404).json({ error: "Category not found" });
    }

    // Generate unique slug for the duplicate
    const existingCategories = await Category.find({}, 'slug');
    const existingSlugs = existingCategories.map(cat => cat.slug);
    const newSlug = generateUniqueSlug(`${originalCategory.name} Copy`, existingSlugs);

    const newCategory = new Category({
      ...originalCategory.toObject(),
      _id: undefined, // Remove _id to generate new one
      name: `${originalCategory.name} (Copy)`,
      slug: newSlug,
      isActive: false, // Set duplicate as inactive by default
    });

    await newCategory.save();
    res.status(201).json(newCategory);

  } catch (error) {
    console.error("Error duplicating category:", error);
    res.status(500).json({ error: "Failed to duplicate category", details: error.message });
  }
});

export default router;