const express = require("express");
const handlebars = require("express-handlebars");

const app = express();

app.set("view engine", "hbs");

app.engine(
  "hbs", handlebars({
    layoutsDir: __dirname + "/views/layouts",
    extname: ".hbs",
    defaultLayout : "planB",
    partialsDir : __dirname + "/views/partials"
  })
);

const posts = [{
  author : "john doe",
  image : "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
  comments : ["Great post", "Awesome one", "Not bad"]
},
{
  author : "jenny doe",
  image : "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
  comments : []
}]

const fakeApiCall = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("RESOLVED")
  }, 3000)
})

app.get("/", async (req, res) => {
  res.render("main", {
    layout : "index",
    helpers : {
      showNameInUpperCase : item => item.author.toUpperCase()
    },
    posts,
    fakeApi : await fakeApiCall()
  });
});

app.get("/users", (req, res) => {
  res.render("users",{
    layout : "index"
  })
})

app.listen(9090, () => console.log("Server started at PORT : 9090"));
