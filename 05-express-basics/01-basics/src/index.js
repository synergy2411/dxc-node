const express = require("express");
const path = require("path");
const { getLatLng } = require("./utils/latLng");
const { getForecast } = require("./utils/forecast");

const app = express();

const PORT = process.env.PORT || 9090;

app.get("/weather", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
})

app.get("/location", async (req, res) =>{
    if(req.query){
        const { location } = req.query;
        try{
        const { lat, lng, placeName } = await getLatLng(location);
        const { temperature, summary } = await getForecast(lat, lng);
        return res.send({
            message : "received",
            lat, lng, placeName, temperature, summary
        })
        }catch(err){
            return res.send({err});
        }
    }else{
        return res.send({message : "Query not found."})
    }
} )

app.listen(PORT, () => {console.log("Server started at PORT : ", PORT)});

// http://localhost:9090/api
// app.get("/api", (req, res) => {
//     res.send({message : "SUCCESS"}).status(200);
// })

// app.get("/todos", (req, res) => {
//     res.sendFile(__dirname +"/public/index.html")
// })

// // Route Parameter
// app.get("/todos/:id/:prodName", (req, res) => {
//     console.log("PARAMS - ", req.params);
//     return res.send({message : "RECEIVED"});
// })

// // Query Parameters
// app.get("/todos/query", (req, res)=> {
//     console.log("Query : ", req.query)
//     return res.send({message : "Query Received"})
// })
