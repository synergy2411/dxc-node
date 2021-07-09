const express = require("express");
const app = express();
const todoRouter = require("./controller/routes/todo.routes");

require("./db")
const PORT = process.env.PORT || 9090

app.use(express.json());
app.get("/", (req, res) => {res.redirect("/todos")})
app.route("/todos")
    .get(todoRouter.getTodos)
    .post(todoRouter.createTodo)
app.route("/todos/:id")
    .get(todoRouter.getTodo)

app.listen(PORT, () => { console.log("Server started at port :" + PORT)})

module.exports = app;