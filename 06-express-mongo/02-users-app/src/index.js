const { PORT } = require("../environment");
const express = require("express");

const app = express();

app.listen(PORT, () => {console.log("Server started at PORT : ", PORT)})
