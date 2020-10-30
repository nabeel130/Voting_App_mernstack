const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/vote");
module.exports.User = require("./user");
module.exports.Poll = require("./poll");