const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  fname: String,
  lname: String,
  email: { type: String, unique: true },
  password: String,
  userType: { type: String, enum: ["Admin", "customer"], required: true }
    
}, {
    versionKey: false,
    timestamps: true
});

<<<<<<< HEAD
const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
=======
const UserInfo = mongoose.model("user", userSchema);

module.exports = {
  UserInfo
}
>>>>>>> 6399be507c2562159e2bccbbd1e233312ea32b37
