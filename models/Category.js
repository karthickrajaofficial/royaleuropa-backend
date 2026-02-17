import mongoose from "mongoose";

const subcategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  image: String,
  slug: { type: String },
  metaTitle: String,
  metaDescription: String,
  metaKeywords: String
});

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  image: String,
  slug: { 
    type: String, 
    unique: true, 
    required: true,
    index: true 
  },
  subcategories: [subcategorySchema],
  isActive: { type: Boolean, default: true },
  sortOrder: { type: Number, default: 0 },
  
  // SEO fields
  metaTitle: String,
  metaDescription: String,
  metaKeywords: String,
  
  // Optional additional fields for flexibility
  parentCategory: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Category',
    default: null 
  },
  
  // Color coding for UI
  color: { type: String, default: '#000000' },
  
  // Icon for display
  icon: String,
  
  // Feature flag
  isFeatured: { type: Boolean, default: false }
  
}, { 
  timestamps: true,
  // Add indexes for better performance
  indexes: [
    { slug: 1 },
    { isActive: 1, sortOrder: 1 },
    { parentCategory: 1 }
  ]
});

// Pre-save middleware to generate slug if not provided
categorySchema.pre('save', function(next) {
  if (!this.slug && this.name) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }
  next();
});

// Instance method to get full category path
categorySchema.methods.getFullPath = async function() {
  if (!this.parentCategory) return this.slug;
  
  const parent = await this.constructor.findById(this.parentCategory);
  if (parent) {
    const parentPath = await parent.getFullPath();
    return `${parentPath}/${this.slug}`;
  }
  return this.slug;
};

// Static method to find active categories
categorySchema.statics.findActive = function() {
  return this.find({ isActive: true }).sort({ sortOrder: 1, name: 1 });
};

// Static method to find featured categories
categorySchema.statics.findFeatured = function() {
  return this.find({ isActive: true, isFeatured: true }).sort({ sortOrder: 1 });
};

// Virtual for subcategory count
categorySchema.virtual('subcategoryCount').get(function() {
  return this.subcategories ? this.subcategories.length : 0;
});

// Ensure virtual fields are serialized
categorySchema.set('toJSON', { virtuals: true });
categorySchema.set('toObject', { virtuals: true });

const Category = mongoose.model("Category", categorySchema);
export default Category;