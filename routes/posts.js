const express = require("express");
const bodyParser = require("body-parser");
const Post = require("../models/post");
const Test = require("../models/test");
var app = express.Router();
app.use(bodyParser.json());

app.get("/", async(req, res) => {
    try {
        const allPosts = await Test.find();
        res.status(200).json(allPosts);
    } catch (err) {
        console.log(err);
    }
});

module.exports = app;