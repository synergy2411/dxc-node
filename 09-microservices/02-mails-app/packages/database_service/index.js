const express = require("express");
const mails = require("./controller/routes/mail.routes")
require("./db");

const app = express()
const PORT = process.env.PORT || 4000;

app.use(express.json())

app.route("/mails")
    .get(mails.getMails)
    .post(mails.createMail)

app.listen(PORT, () => console.log("Database Service started at PORT : ", PORT))