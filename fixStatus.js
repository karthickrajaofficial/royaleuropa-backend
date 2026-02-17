import mongoose from "mongoose";
import Package from "./models/Package.js"; // adjust path

const MONGO_URI = "mongodb+srv://karthickrajaofficial1:karthick123@royaleuropa.bmq9wgl.mongodb.net/travelsDB?retryWrites=true&w=majority&appName=RoyalEuropa"; 

const fixStatus = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    const result = await Package.updateMany(
      { status: { $exists: false } },
      { $set: { status: "active" } }
    );

    console.log(`${result.modifiedCount} packages updated with default status.`);
    mongoose.disconnect();
  } catch (err) {
    console.error("Error updating status:", err);
    mongoose.disconnect();
  }
};

fixStatus();
