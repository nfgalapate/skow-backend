const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {type: String},
    author: {type: String},
    content: {type: String},
    timestamp: {type: Date, default: Date.now}
},  {
    collection: 'posts'
});

module.exports = mongoose.model("post", postSchema, "post");