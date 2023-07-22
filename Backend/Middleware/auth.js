const jwt = require("jsonwebtoken");
const UserModel = require("../Models/user.model");

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "mahendra", async function (err, decoded) {
      if (decoded) {
        req.body._id = decoded.userID; // Update from userID to _id
        // const user = await UserModel.findOne({ _id: decoded.userID });
        // req.role = user.role;
        next();
      } else {
        res.status(401).send({ msg: "Wrong Credentials" });
      }
    });
  } else {
    res.status(401).send({ msg: "Login First" });
  }
};

module.exports = auth;
