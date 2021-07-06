const { v4 } = require("uuid");
const express = require("express");

const app = express();

// adding middleware
app.use(express.json());

let todoCollection = [];

// let notes = [{title : "", body: "", id: ""}]

app.get("/todos", (req, res) => {
  res.send({ data: todoCollection });
});

app.post("/todos", (req, res) => {
  if (req.body) {
    const todo = {
      id: v4(),
      ...req.body,
    };
    todoCollection.push(todo);
    return res.send(todo).status(201);
  } else {
    return res.send({ message: "Body does not exist" });
  }
});

app.get("/todos/:id", (req, res) => {
  const { id } = req.params;
  const todoFound = todoCollection.find((todo) => todo.id === id);
  if (!todoFound) {
    return res.send({ message: "Not found" });
  } else {
    return res.send({ ...todoFound });
  }
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  const position = todoCollection.findIndex((todo) => todo.id === id);
  if (position >= 0) {
    const deletedItem = todoCollection.splice(position, 1);
    return res.send({
      message: "item deleted",
      ...deletedItem,
    });
  } else {
    return res.send({ message: "item not found" });
  }
});

app.patch("/todos/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    const todoFound = todoCollection.find((todo) => todo.id === id);
    if (todoFound) {
      if (req.body) {
        const position = todoCollection.findIndex((todo) => todo.id === id);
        todoCollection[position] = {
          ...todoCollection[position],
          ...req.body,
        };
        return res.send(todoCollection[position]);
      } else {
        return res.send({ message: "Body not exist" });
      }
    } else {
      return res.send({ message: "Item not found" });
    }
  } else {
    return res.send({ message: "Id needed" });
  }
});

app.listen(9000, () => {
  console.log("Server started at PORT : ", 9000);
});
