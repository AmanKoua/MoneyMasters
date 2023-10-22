const express = require('express');
const mongoose = require('mongoose');
const { MongoClient, GridFSBucket, ObjectId } = require('mongodb');
const fs = require('fs');
const path = require("path");
const cors = require('cors');

const userRouter = require("./routes/user");

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use(express.static('dist'))

// app.get("*", async (req, res) => {
//     return res.status(200).json({ message: "Hello from MoneyMasters" });
// })

app.get('*', (req, res) => {
    res.setHeader("Content-Type", "application/javascript");
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
    // res.status(200).json({ message: "Hello from prodlodge!" })
})

mongoose.connect(process.env.MONGO_URI).then(async () => {
    app.listen(process.env.PORT, () => {
        console.log("Listening on port " + process.env.PORT);
    })
}).catch((e) => {
    console.log(e);
}); 