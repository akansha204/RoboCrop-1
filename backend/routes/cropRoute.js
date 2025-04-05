const express = require("express");
const cropRouter = express.Router();
const { CropModel } = require("../db");

cropRouter.get("/get-info", async (req, res) => {
  try {
    const crops = await CropModel.find({});
    res.status(200).json({
      success: true,
      data: crops,
    });
  } catch (error) {
    console.error("Error fetching crop info:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

module.exports = cropRouter;
