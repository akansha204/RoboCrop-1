const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    // required: function () {
    //   return !this.googleId;
    // },
    select: false,
  },
  googleId: { type: String, unique: true, sparse: true }, // For Google Auth users
  profilePicture: { type: String }, // Optional: Store Google profile picture
});

const cropSchema = new Schema({
  moisture: { type: Number },
  temperature: { type: Number },
  humidity: { type: Number },
  location: {
    langitude: { type: Number },
    latitude: { type: Number },
  },
});

const UserModel = mongoose.model("User", userSchema);

const CropModel = mongoose.model("Crop", cropSchema);

module.exports = {
  UserModel,
  CropModel,
};
