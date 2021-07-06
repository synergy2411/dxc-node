const { PORT } = require("../environment");
const express = require("express");

const UserRouter = require("./routes/user.routes");

const app = express();

app.use(express.json());

app.use("/users", UserRouter)
// app.use("/posts", PostRouter)

app.listen(PORT, () => {
    console.log("Server started at PORT : ", PORT);
    require("./db");
})
