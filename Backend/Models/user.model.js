const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: { type: String },
    isEmailVerified: { type: Boolean, default: false },
    otp: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const UserInfo = mongoose.model("user", userSchema);

module.exports = {
  UserInfo,
};
