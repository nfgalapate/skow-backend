require("dotenv").config();
require("./config/database").connect();

require("dotenv").config();
require("./config/database").connect();

const express = require("express");
const app = express();
// const auth = require("./middleware/auth");
var router = express.Router();

var posts = require('./routes/posts');
app.use('/posts', posts);

module.exports = app;