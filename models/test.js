const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
    title: {type: String},
    
},  {
    collection: 'test'
});

module.exports = mongoose.model("test", testSchema, "test");