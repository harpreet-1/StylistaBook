const mongoose = require("mongoose");

const stylistSchema = new mongoose.Schema({
  userID: {
    type: String,
    ref: "user",
    required: true,
  },
  image: String,
  salonName: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
});

const StylistModel = mongoose.model("Stylist", stylistSchema);
module.exports = StylistModel;
