var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require('mongoose');
const axios = require('axios');
var app = express();

const url = 'mongodb://localhost:27017/student';


mongoose.connect(url, { useNewUrlParser: true });

const student = new mongoose.Schema({
    name: String,
    branch: String,
    sem: Number
}, { collection: 'data' });

app.use(bodyParser.json());
var doc = mongoose.model("data", student);
app.get("/", (req, res) => {

    doc.find({}, (err, docs) => {
        if (err) throw err;

        res.sendFile(__dirname + "/client/build/index.html");
    });
});

app.post("/add", (req, res) => {
    var d = new doc(req.body);
    d.save(function (err) {
        if (err) res.send(err);
        res.send({ status: "Data Recorded Successfully" });
    });

});

app.post("/delete", (req, res) => {
    doc.findByIdAndRemove(req.body.id, (err) => {
        if (err) console.log(err);
        res.send({ status: "deleted Successfully" });
    })
})

app.listen(1234, () => console.log("Connected at 1234"));