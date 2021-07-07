const { connect } = require("mongoose");
const { USER, PASSWORD } = require("../../environment");

const uri = `mongodb+srv://${USER}:${PASSWORD}@cluster0.e9xsq.mongodb.net/theTest?retryWrites=true&w=majority`

connect(uri, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify : true
}).then(mongo => {
    console.log("Mongoose connected...")
}).catch(err => {
    console.log(err);
    process.exit(1);
})