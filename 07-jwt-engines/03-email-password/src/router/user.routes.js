const express = require("express");
const multer = require("multer");

const { findAllUser, createUser, findOneUser, deleteUser, updateUser } = require("../controller/user.controller");

const UserRouter = new express.Router();

const upload = multer({
    dest : __dirname + "/../uploads/"           // src/uploads
})

// http://localhost:3000/users
UserRouter.route("/")
    .get(findAllUser)
    .post(upload.single("avatar"), createUser)

    // none () - accepts only text fields (req.body)
    // Single() - accepts all the text fields (req.body) as well as Single file (req.file) 
    // Array() - accepts all the text fields (req.body) as well as Multiple files (req.file) 

    // http://localhost:3000/users/{id}
UserRouter.route("/:id")
    .get(findOneUser)
    .delete(deleteUser)
    .patch(updateUser)

module.exports = UserRouter
