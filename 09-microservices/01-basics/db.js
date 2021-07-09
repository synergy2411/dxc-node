const app = require("express")();

app.get("/db", (req, res)=>{
    res.send(getDB())
})

app.listen(9001, () => {console.log("Started at Port : 9001")})

const getDB = () => {
    const config = {};
    if(!config.data){
        process.exit(1);
    }else{
        return {message : "DATA RECEIVED"}
    }
}

// module.exports = { getDB };