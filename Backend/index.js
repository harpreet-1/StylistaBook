<<<<<<< HEAD
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const passport = require("passport");
require("./google-outh");
const port = process.env.PORT;
const cookiParser = require("cookie-parser");
const connectDB = require("./db");
const app = express();
const bodyParser = require("body-parser");
app.use(passport.initialize());
app.use(express.json());
app.use(cors());

const userrouter = require("./Routes/user.router");

const auth = require("./Middleware/auth");
const userAuth = require("./Middlewares/Auth");

app.use(cookiParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/user", userrouter);
=======
const express = require('express');
const cors = require('cors');

require('dotenv').config();

const { connection } = require('./Configs/db');
const { styleRouter } = require('./Routes/style.routes');
const { stylistRouter } = require('./Routes/stylist.routes');
const userRoutes = require("./Routes/user.routes");
const { appointmentRouter } = require('./Routes/appointment.routes');
const { adminRouter } = require('./Routes/admin.routes');


const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", userRoutes)
app.use('/style', styleRouter)
app.use('/stylist', stylistRouter)
app.use('/appointment', appointmentRouter)
app.use('/admin', adminRouter)


const Port = process.env.Port || 8000;

app.listen(Port, async (req,res)=>{
>>>>>>> 6399be507c2562159e2bccbbd1e233312ea32b37

    try {

        await connection;

        console.log(`DB connected. `);

    } catch (error) {

        console.log(error);

    }

    console.log(`server is running on port ${Port}`);
    
})