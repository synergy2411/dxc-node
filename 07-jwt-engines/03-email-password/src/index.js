const { PORT } = require("../environment");
const express = require("express");
const multer = require("multer");

const UserRouter = require("./router/user.routes");

const upload = multer();
const app = express();

// app.use(upload.none());          // Application level middleware

app.use(express.json());

app.use("/users", UserRouter)

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
  console.log("Server started at PORT : ", PORT);
  require("./db");
});
