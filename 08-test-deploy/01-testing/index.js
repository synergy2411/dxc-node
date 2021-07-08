const express = require("express");
const app = express();
const todoRouter = require("./controller/routes/todo.routes");

require("./db")

app.use(express.json());

app.route("/todos")
    .get(todoRouter.getTodos)
    .post(todoRouter.createTodo)
app.route("/todos/:id")
    .get(todoRouter.getTodo)

app.listen(9090, () => { console.log("Server started at port : 9090")})

module.exports = app;