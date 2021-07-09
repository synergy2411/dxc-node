const { Schema, model } = require("mongoose");

const mailSchema = new Schema({
    subject : String,
    content : String,
    receiver : String
})

module.exports = model("Mail", mailSchema)