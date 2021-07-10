// const express = require("express");
// const notes = require("./controller/routes/notes.routes");
// const path = require("path");

import express from 'express';
import path from 'path';

const app = express();
const DIR_PATH = __dirname;
const HTML_PATH = path.join(__dirname ,"index.html");

app.use(express.static(DIR_PATH))

const PORT = process.env.PORT || 9090;

app.use(express.json());

app.get("*", (req, res) => {
    res.sendFile(HTML_PATH)
})

// app.get("/notes", notes.getNotes)
// app.post("/notes", notes.createNote)

app.listen(PORT, () => console.log("Server started at PORT : ", PORT))