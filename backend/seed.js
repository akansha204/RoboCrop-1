require("dotenv").config();
const mongoose = require("mongoose");
const { CropModel } = require("./db");
const cropData = require("./demo.json");

mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    console.log("Connected to MongoDB...");

    // Insert remedies without checking for duplicates
    await CropModel.insertMany(cropData);
    console.log("New remedies added successfully!");

    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
