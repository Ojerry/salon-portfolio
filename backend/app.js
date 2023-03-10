require("dotenv").config();
const cors = require('cors')
const upload = require("./routes/upload");
const userRoutes = require("./routes/userRoutes");
const Grid = require("gridfs-stream");
const mongoose = require("mongoose");
const bodyparser = require('body-parser')
const connection = require("./config/db");
const express = require("express");
const app = express();

let gfs;
connection();

const conn = mongoose.connection;
conn.once("open", function () {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("photos");
});

//Allowing For Cross Reference to the Server.
const corsOption = {
    origin: 'http://localhost:3000',
    credentials: true,
  }
  app.use(cors(corsOption))

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.use("/file", upload);
app.use('/mysalon/api/user',userRoutes)

// media routes
app.get("/file/:filename", async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename });
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
    } catch (error) {
        res.send("not found");
    }
});

app.delete("/file/:filename", async (req, res) => {
    try {
        await gfs.files.deleteOne({ filename: req.params.filename });
        res.send("success");
    } catch (error) {
        console.log(error);
        res.send("An error occured.");
    }
});

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
