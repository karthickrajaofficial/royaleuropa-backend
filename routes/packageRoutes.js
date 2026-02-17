// // backend/routes/packageRoutes.js
// import express from "express";
// import Package from "../models/Package.js"; // Mongoose model
// import slugify from "slugify"; 
// const router = express.Router();

// // Get all packages
// // In your backend packageRoutes.js
// router.get("/", async (req, res) => {
//   try {
//     const packages = await Package.find().populate('categories', 'name');
    
//     // Filter out null/undefined categories that failed to populate
//     const cleanedPackages = packages.map(pkg => ({
//       ...pkg.toObject(),
//       categories: pkg.categories.filter(cat => cat && cat.name)
//     }));
    
//     res.json(cleanedPackages);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch packages" });
//   }
// });

// // Get single package
// router.get("/:id", async (req, res) => {
//   try {
//     const pkg = await Package.findById(req.params.id); // MongoDB _id
//     if (!pkg) {
//       return res.status(404).json({ error: "Package not found" });
//     }
//     res.json(pkg);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch package" });
//   }
// });

// // Create new package
// // router.post("/", async (req, res) => {
// //   try {
// //     const newPackage = new Package(req.body);
// //     await newPackage.save();
// //     res.status(201).json(newPackage);
// //   } catch (error) {
// //     res.status(500).json({ error: "Failed to create package", details: error.message });
// //   }
// // });
// // Create new package
// router.post("/", async (req, res) => {
//   try {
//     console.log("📥 Incoming Create Request:", req.body);

//     const newPackage = new Package({
//       ...req.body,
//       // 'image' field should be the path returned by upload.js
//       image: req.body.image, 
//       bannerImages: req.body.bannerImages || [],
//     });

//     await newPackage.save();
//     res.status(201).json(newPackage);

//   } catch (error) {
//     console.error("💥 CREATE ERROR:", error);

//     if (error.name === "ValidationError") {
//       return res.status(400).json({
//         error: "Validation failed",
//         details: Object.values(error.errors).map(e => e.message),
//       });
//     }

//     res.status(500).json({ error: "Failed to create package", details: error.message });
//   }
// });


// // Update package
// // router.put("/:id", async (req, res) => {
// //   try {
// //     const updatedPackage = await Package.findByIdAndUpdate(
// //       req.params.id,
// //       { ...req.body, updatedAt: new Date() },
// //       { new: true }
// //     );

// //     if (!updatedPackage) {
// //       return res.status(404).json({ error: "Package not found" });
// //     }

// //     res.json(updatedPackage);
// //   } catch (error) {
// //     res.status(500).json({ error: "Failed to update package" });
// //   }
// // });
// // Update package
// router.put("/:id", async (req, res) => {
//   try {
//     console.log("=== 🚀 UPDATE REQUEST START ===");
//     console.log("📋 Package ID:", req.params.id);
// console.log("📥 req.body received by backend:", req.body);
// console.log("➡️ typeof price:", typeof req.body.price);

//     // 1. Get the current state BEFORE update
//     const existingPackage = await Package.findById(req.params.id);
//     if (!existingPackage) {
//       console.log("❌ Package not found");
//       return res.status(404).json({ error: "Package not found" });
//     }

//     console.log("📊 BEFORE UPDATE - Price:", existingPackage.price, "Updated At:", existingPackage.updatedAt);

//     // 2. Update with $set
//     const updatedPackage = await Package.findByIdAndUpdate(
//       req.params.id,
//       { 
//         $set: {
//           ...req.body,
//           updatedAt: new Date()
//         }
//       },
//       { 
//         new: true,           // return updated doc
//         runValidators: true, // validate with schema
//       }
//     );

//     if (!updatedPackage) {
//       return res.status(404).json({ error: "Package not found" });
//     }

//     console.log("📈 AFTER UPDATE - Price:", updatedPackage.price, "Updated At:", updatedPackage.updatedAt);

//     // 3. Verify from DB again
//     const freshPackage = await Package.findById(req.params.id);
//     console.log("🔍 FRESH FROM DB - Price:", freshPackage.price, "Updated At:", freshPackage.updatedAt);

//     console.log("=== ✅ UPDATE REQUEST COMPLETE ===");

//     res.json(freshPackage);

//   } catch (error) {
//     console.error("💥 UPDATE ERROR:", error.message);
    
//     if (error.name === 'ValidationError') {
//       return res.status(400).json({ 
//         error: "Validation failed",
//         details: Object.values(error.errors).map(e => e.message)
//       });
//     }

//     if (error.name === 'CastError') {
//       return res.status(400).json({ error: "Invalid package ID format" });
//     }

//     res.status(500).json({ error: "Server error" });
//   }
// });



// // Delete package
// router.delete("/:id", async (req, res) => {
//   try {
//     const deletedPackage = await Package.findByIdAndDelete(req.params.id);

//     if (!deletedPackage) {
//       return res.status(404).json({ error: "Package not found" });
//     }

//     res.json({ message: "Package deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to delete package" });
//   }
// });
// // Duplicate package


// router.post("/duplicate/:id", async (req, res) => {
//   try {
//     const originalPackage = await Package.findById(req.params.id);
//     if (!originalPackage) {
//       return res.status(404).json({ error: "Package not found" });
//     }

//     const newPackage = {
//       ...originalPackage.toObject(), // copy all fields
//       _id: undefined,               // remove _id
//       id: undefined,                // generate new id if needed
//       name: `${originalPackage.name} (Copy)`,
//       path: `${slugify(originalPackage.name)}-${Date.now()}`, // unique path
//       status: "draft",              // optional default
//     };

//     const createdPackage = await Package.create(newPackage);
//     res.status(201).json(createdPackage);

//   } catch (error) {
//     console.error("Error duplicating package:", error);
//     res.status(500).json({ error: "Failed to duplicate package", details: error.message });
//   }
// });


// export default router;
// backend/routes/packageRoutes.js
import express from "express";
import mongoose from "mongoose";
import Package from "../models/Package.js"; // Mongoose model
import slugify from "slugify";
import Category from "../models/Category.js"; // Add this import

const { ObjectId } = mongoose.Types; 
const router = express.Router();

// Get all packages
router.get("/", async (req, res) => {
  try {
    const packages = await Package.find();
    
    // Manual category lookup since populate isn't working
    const packagesWithCategories = await Promise.all(
      packages.map(async (pkg) => {
        const categoryNames = [];
        
        if (pkg.categories && pkg.categories.length > 0) {
          for (const catId of pkg.categories) {
            try {
              // Try to find category by ID (handle both string and ObjectId)
              const category = await Category.findById(catId);
              if (category) {
                categoryNames.push({ _id: category._id, name: category.name });
              }
            } catch (error) {
              console.log(`Category not found for ID: ${catId}`);
            }
          }
        }
        
        return {
          ...pkg.toObject(),
          categories: categoryNames
        };
      })
    );
    
    res.json(packagesWithCategories);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: "Failed to fetch packages" });
  }
});

// Get single package
router.get("/:id", async (req, res) => {
  try {
    const pkg = await Package.findById(req.params.id); // MongoDB _id
    if (!pkg) {
      return res.status(404).json({ error: "Package not found" });
    }
    res.json(pkg);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch package" });
  }
});

// Create new package
router.post("/", async (req, res) => {
  try {
    console.log("📥 Incoming Create Request:", req.body);

    // Convert category string IDs to ObjectIds
    const packageData = {
      ...req.body,
      image: req.body.image, 
      bannerImages: req.body.bannerImages || [],
    };

    // Convert categories from strings to ObjectIds
    if (packageData.categories && Array.isArray(packageData.categories)) {
      packageData.categories = packageData.categories.map(catId => {
        try {
          return new ObjectId(catId);
        } catch (error) {
          console.warn(`Invalid category ID: ${catId}`);
          return null;
        }
      }).filter(Boolean); // Remove null values
    }

    console.log("📦 Package data with ObjectId categories:", packageData);

    const newPackage = new Package(packageData);
    await newPackage.save();
    res.status(201).json(newPackage);

  } catch (error) {
    console.error("💥 CREATE ERROR:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        error: "Validation failed",
        details: Object.values(error.errors).map(e => e.message),
      });
    }

    res.status(500).json({ error: "Failed to create package", details: error.message });
  }
});

// Update package
router.put("/:id", async (req, res) => {
  try {
    console.log("=== 🚀 UPDATE REQUEST START ===");
    console.log("📋 Package ID:", req.params.id);
    console.log("📥 req.body received by backend:", req.body);

    // 1. Get the current state BEFORE update
    const existingPackage = await Package.findById(req.params.id);
    if (!existingPackage) {
      console.log("❌ Package not found");
      return res.status(404).json({ error: "Package not found" });
    }

    // 2. Prepare update data with ObjectId conversion
    const updateData = { ...req.body };

    // Convert categories from strings to ObjectIds
    if (updateData.categories && Array.isArray(updateData.categories)) {
      updateData.categories = updateData.categories.map(catId => {
        try {
          return new ObjectId(catId);
        } catch (error) {
          console.warn(`Invalid category ID: ${catId}`);
          return null;
        }
      }).filter(Boolean); // Remove null values
    }

    console.log("📦 Update data with ObjectId categories:", updateData);

    // 3. Update with $set
    const updatedPackage = await Package.findByIdAndUpdate(
      req.params.id,
      { 
        $set: {
          ...updateData,
          updatedAt: new Date()
        }
      },
      { 
        new: true,           // return updated doc
        runValidators: true, // validate with schema
      }
    );

    if (!updatedPackage) {
      return res.status(404).json({ error: "Package not found" });
    }

    console.log("📈 AFTER UPDATE - Categories:", updatedPackage.categories);

    // 4. Verify from DB again
    const freshPackage = await Package.findById(req.params.id);
    console.log("🔍 FRESH FROM DB - Categories:", freshPackage.categories);

    console.log("=== ✅ UPDATE REQUEST COMPLETE ===");

    res.json(freshPackage);

  } catch (error) {
    console.error("💥 UPDATE ERROR:", error.message);
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        error: "Validation failed",
        details: Object.values(error.errors).map(e => e.message)
      });
    }

    if (error.name === 'CastError') {
      return res.status(400).json({ error: "Invalid package ID format" });
    }

    res.status(500).json({ error: "Server error" });
  }
});

// Delete package
router.delete("/:id", async (req, res) => {
  try {
    const deletedPackage = await Package.findByIdAndDelete(req.params.id);

    if (!deletedPackage) {
      return res.status(404).json({ error: "Package not found" });
    }

    res.json({ message: "Package deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete package" });
  }
});

// Duplicate package
router.post("/duplicate/:id", async (req, res) => {
  try {
    const originalPackage = await Package.findById(req.params.id);
    if (!originalPackage) {
      return res.status(404).json({ error: "Package not found" });
    }

    const newPackage = {
      ...originalPackage.toObject(), // copy all fields
      _id: undefined,               // remove _id
      id: undefined,                // generate new id if needed
      name: `${originalPackage.name} (Copy)`,
      path: `${slugify(originalPackage.name)}-${Date.now()}`, // unique path
      status: "draft",              // optional default
    };

    const createdPackage = await Package.create(newPackage);
    res.status(201).json(createdPackage);

  } catch (error) {
    console.error("Error duplicating package:", error);
    res.status(500).json({ error: "Failed to duplicate package", details: error.message });
  }
});

export default router;