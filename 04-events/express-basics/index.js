const express = require("express");

const app = express();
const PORT  = process.env.PORT || 3030;

app.get("/api", (req, res) => {
    console.log("METHOD : ", req.method)
    console.log("URL : ", req.url)
    res.send({message : "SUCCESS"})
})

app.listen(PORT, () => {console.log("Express started at PORT : ", PORT)})
