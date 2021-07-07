const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    age : {
        type : Number
    },
    password : {
        type : String,
        required : true
    },
    avatar : {
        data : Buffer,
        contentType : String
    }
})

const UserModel = model("User", userSchema)

module.exports = UserModel