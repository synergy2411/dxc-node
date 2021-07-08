const { connect } = require("mongoose")

const uri = `mongodb+srv://scott:tiger123@cluster0.e9xsq.mongodb.net/theTest?retryWrites=true&w=majority`

connect(uri,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify :true
}).then(res => console.log("Mongoose connected"))
.catch(err => {
    console.log(err)
    process.exit(1);
})