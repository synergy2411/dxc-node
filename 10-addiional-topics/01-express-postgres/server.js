const express = require("express");
const notes = require("./controller/routes/notes.routes");

const app = express();

const PORT = process.env.PORT || 9090;

app.use(express.json());

app.get("/notes", notes.getNotes)
app.post("/notes", notes.createNote)

app.listen(PORT, () => console.log("Server started at PORT : ", PORT))