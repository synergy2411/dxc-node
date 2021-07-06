const express = require("express");
const { findAllUser, createUser, findOneUser } = require("../controller/user.controller");

const UserRouter = new express.Router();

// http://localhost:3000/users
UserRouter.route("/")
    .get(findAllUser)
    .post(createUser)

    // http://localhost:3000/users/{id}
UserRouter.route("/:id")
    .get(findOneUser)

module.exports = UserRouter
