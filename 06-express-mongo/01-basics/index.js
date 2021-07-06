const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://khandelwal:rH7LKNOyPctkvh8b@cluster0.e9xsq.mongodb.net/theTest?retryWrites=true&w=majority"
MongoClient.connect(uri, (err, mongo)=>{
    if(err){
        console.log(err);
        process.exit(1);
    }
    console.log("Mongo Connected...")
})
