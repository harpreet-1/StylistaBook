const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const { dbconnection } = require("./Configs/db");

const userRoutes = require("./Routes/user.routes");
const stylistRouter = require("./Routes/stylist.routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", userRoutes);
app.use("/stylist", stylistRouter);

const Port = process.env.Port || 8000;

app.listen(Port, async (req, res) => {
  try {
    await dbconnection;
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }

  console.log(`server is running on port ${Port}`);
});
