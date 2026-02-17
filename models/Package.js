// // import mongoose from "mongoose";

// // const packageSchema = new mongoose.Schema({
// //   name: { type: String, required: true },
// //   location: { type: String },
// //   image: { type: String }, // main image
// //   title: { type: String },
// //   experience: { type: String }, // e.g. "7 Days / 6 Nights"
// //   path: { type: String, required: true, unique: true }, // used for URLs
// //   type: { type: String, default: "Group Tours" }, // Group Tours / Private / etc.
  
// //   categories: [{ type: String }], // e.g. ['Adventure', 'Honeymoon']
// //   additionalTourTypes: [{ type: String }], // e.g. ['Luxury', 'Budget']
// //   reasons: [{ type: String }], // reasons to visit
// //   topAttractions: [{ type: String }], // list of attractions
// //   subPlaces: [{ type: String }], // list of sub-places
  
// //   bannerImages: [{ type: String }], // multiple image URLs

// //   // SEO meta tags
// //   metaTitle: { type: String },
// //   metaDescription: { type: String },
// //   metaKeywords: { type: String },

// //   createdAt: { type: Date, default: Date.now }
// // });

// // const Package = mongoose.model("Package", packageSchema);
// // export default Package;
// // import mongoose from "mongoose";

// // const reasonSchema = new mongoose.Schema({
// //   title: String,
// //   description: String,
// // });

// // const attractionSchema = new mongoose.Schema({
// //   name: String,
// //   image: String,
// // });

// // const subPlaceSchema = new mongoose.Schema({
// //   name: String,
// //   image: String,
// //   gallery: [String],
// //   description: String,
// //   duration: String,
// //   categories: [String],
// //   highlights: [String],
// // });

// // const bannerImageSchema = new mongoose.Schema({
// //   id: Number,
// //   src: String,
// //   number: Number,
// //   label: String
// // }, { _id: false });

// // const packageSchema = new mongoose.Schema({
// //   name: { type: String, required: true },
// //   location: String,
// //   image: String,
// //   title: String,
// //   experience: String,
// //   path: { type: String, required: true, unique: true },
// //   type: { type: String, default: "Group Tours" },

// //   categories: [String],
// //   additionalTourTypes: [String],
// //   reasons: [String],
// //   topAttractions: [String],
// //   subPlaces: [String],

// //   bannerImages: [bannerImageSchema],  // ✅ changed here

// //   metaTitle: String,
// //   metaDescription: String,
// //   metaKeywords: String,

// //   createdAt: { type: Date, default: Date.now }
// // });


// // const Package = mongoose.model("Package", packageSchema);
// // export default Package;
// import mongoose from "mongoose";

// const packageSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   location: { type: String },
//   image: { type: String }, // main image
//   title: { type: String },
//   experience: { type: String }, // e.g. "7 Days / 6 Nights"
//   path: { type: String, required: true, unique: true }, // used for URLs
//   type: { type: String, default: "Group Tours" }, // Group Tours / Private / etc.

//   categories: [{ type: String }], // e.g. ['Adventure', 'Honeymoon']
//   additionalTourTypes: [{ type: String }], // e.g. ['Luxury', 'Budget']


//   reasons: [
//     {
//       title: String,
//       description: String,
//     },
//   ],

//   topAttractions: [
//     {
//       id: Number,
//       name: String,
//       image: String,
//     },
//   ],

//   subPlaces: [
//     {
//       title: String,
//       description: String,
//       image: String,
//     },
//   ],

//   bannerImages: [
//     {
//       id: Number,
//       src: String,
//       number: Number,
//       label: String,
//     },
//   ],

//   // SEO meta tags
//   metaTitle: { type: String },
//   metaDescription: { type: String },
//   metaKeywords: { type: String },

//   createdAt: { type: Date, default: Date.now },
// });
// // 🔹 Auto-generate `path` if missing
// packageSchema.pre("save", function (next) {
//   if (!this.path && this.name) {
//     this.path = this.name.toLowerCase().replace(/\s+/g, "-"); // e.g. "Paris Tour" → "paris-tour"
//   }
//   next();
// });

// const Package = mongoose.model("Package", packageSchema);
// export default Package;
// import mongoose from "mongoose";

// const reasonSchema = new mongoose.Schema({
//   title: String,
//   description: String
// });

// const attractionSchema = new mongoose.Schema({
//   id: Number,
//   name: String,
//   image: String
// });

// const subPlaceSchema = new mongoose.Schema({
//   id: String,
//   name: String,
//   image: String,
//   title: String,
//   description: String,
//   duration: String,
//   path: String,
//   type: String,
//   categories: [String],
//   gallery: [String],
//   highlights: [String]
// });

// const bannerImageSchema = new mongoose.Schema({
//   id: Number,
//   src: String,
//   number: Number,
//   label: String
// });

// const travelAdviceSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   sections: [{}] // flexible, since your data has nested structures
// });

// const packageSchema = new mongoose.Schema({
//   id: { type: String, required: true },
//   name: { type: String, required: true },
//   location: String,
//   image: String,
//   title: String,
//   description: String,
//   path: { type: String, required: true, unique: true },
//   type: { type: String, default: "Group Tours" },

//   categories: [String],
//   additionalTourTypes: [String],

//   reasons: [reasonSchema],
//   topAttractions: [attractionSchema],
//   subPlaces: [subPlaceSchema],

//   bannerImages: [bannerImageSchema],
//   travelAdvice: travelAdviceSchema,

//   // SEO
//   metaTitle: String,
//   metaDescription: String,
//   metaKeywords: String,

//   status: {
//   type: String,
//   enum: ["active", "inactive"],
//   default: "active"
// },


//   createdAt: { type: Date, default: Date.now }
// });

// const Package = mongoose.model("Package", packageSchema);
// export default Package;
import mongoose from "mongoose";

const reasonSchema = new mongoose.Schema({
  title: String,
  description: String
});

const attractionSchema = new mongoose.Schema({
  name: String,
  image: String
});

const subPlaceSchema = new mongoose.Schema({
  name: String,
  image: String,
  title: String,
  description: String,
  duration: String,
  type: String,
  categories: [String],
  highlights: [String],
  metaTitle: String,
  metaDescription: String,
  metaKeywords: String
});

const bannerImageSchema = new mongoose.Schema({
  src: String,
  label: String
});

const travelAdviceSchema = new mongoose.Schema({
  title: String,
  description: String,
  sections: [{}]
});

const packageSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  location: String,
  image: String,
  title: String,
  description: String,
  path: { type: String, required: true, unique: true },
  type: { type: String, default: "Group Tours" },
  

  price: { type: Number, default: 0 },

  categories: [String],
  additionalTourTypes: [String],

  reasons: [reasonSchema],
  topAttractions: [attractionSchema],
  subPlaces: [subPlaceSchema],

  bannerImages: [bannerImageSchema],
  travelAdvice: travelAdviceSchema,

  // SEO
  metaTitle: String,
  metaDescription: String,
  metaKeywords: String,

  status: {
    type: String,
    enum: ["draft", "active", "inactive","published"], // ADD "draft" to enum
    default: "active"
  },

// ADD THIS FIELD

}, { timestamps: true }); // This automatically handles createdAt/updatedAt

const Package = mongoose.model("Package", packageSchema);
export default Package;