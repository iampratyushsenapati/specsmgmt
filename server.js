const express = require("express")
const connectDB = require("./config/db")
const cors = require("cors")
const hotels = require("./routes/api/hotels")
const path = require('path');
require("dotenv").config( { path: "./config.env" } )

// CONNECTING TO DB
connectDB()

// INITIATING APP
const app = express()

// HANDLING MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use("/api/hotels", hotels);

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


// STARTING SERVER
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Express server running on port ${port}`));