const mongoose = require("mongoose");

const schema = mongoose.Schema({
    firstName: String,
    lastName: String,
    designation: String,
    emailId: { type: String, unique: true },
    password: String,
    mobileNumber: String    
}, {
    collection: "SignUp"
});

module.exports = schema;