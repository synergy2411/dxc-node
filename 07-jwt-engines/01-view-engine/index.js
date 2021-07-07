const express = require("express");
const handlebars = require("express-handlebars");

const app = express();

app.set("view engine", "hbs");

app.engine("hbs", handlebars({
    layoutsDir : __dirname + "/views/layouts",
    extname : "hbs"
}))

app.get("/", (req, res) => {
    res.render("main", {
        layout : "index"
    })
})

app.listen(9090, () => console.log("Server started at PORT : 9090"));