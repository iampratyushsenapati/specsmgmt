const express = require ("express");
const connectDB  = require ("./config/db");
const cors = require("cors");
const hotels = require("./routes/api/hotels");
const path =require('path');
require("dotenv").config( { path: "./config.env" } )

//connecting Tom DB
connectDB();

// Initiating the app
const app= express();

//Enabling CORS here for safety of access of info from others domain
app.use(cors());

//Handle JSON parsing properly 
app.use(express.json({
    extended: false
}));

//use the API gtroup insted of multiple paths for multiple routes
app.use("/api/hotels",hotels);

// STATIC FILES
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});


const port=process.env.PORT || 5000
app.listen(port,()=>
console.log(`Server running on port ${port}`)
);