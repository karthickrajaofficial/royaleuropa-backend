// seedParis.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Package from "./models/Package.js";
import { packages } from "./data/packages.js"; // make sure your Paris package is exported in packages.js

dotenv.config();

async function seedParis() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    const parisPackage = packages.find(pkg => pkg.name === "Paris");
    if (!parisPackage) {
      throw new Error("Paris package not found in packages.js");
    }

    await Package.deleteOne({ path: parisPackage.path }); // prevent duplicates
    await Package.create(parisPackage);

    console.log("🎉 Paris package inserted successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Seeding error:", err);
    mongoose.connection.close();
  }
}

seedParis();
