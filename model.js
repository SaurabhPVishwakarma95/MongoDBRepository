const schema = require("./schema");
const mongoose = require("mongoose");
const UserModel = mongoose.model("User", schema);

module.exports = UserModel;