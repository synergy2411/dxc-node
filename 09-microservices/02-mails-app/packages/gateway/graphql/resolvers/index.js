// const { v4 } =require("uuid");

// const mails = [
//     {_id : "101", subject : "The subject 1", content : "The content 1", receiver : "the receiver 1"},
//     {_id : "102", subject : "The subject 2", content : "The content 2", receiver : "the receiver 2"},
//     {_id : "103", subject : "The subject 3", content : "The content 3", receiver : "the receiver 3"},
// ]

const axios = require("axios").default;
const {SERVICE_DB_PORT} = process.env;

module.exports = {
  hello: () => {
    return "Hello World!!!";
  },
  me: () => {
    return {
      id: "111",
      name: "Sumit",
      email: "summit@test.com",
      age: 34,
    };
  },
  mails : async () => {
    // const result = await axios.get("http://localhost:4040/mails")
    const result = await axios.get(`http://localhost:${SERVICE_DB_PORT}/mails`)
    console.log(result.data)
    return result.data
    // return mails;
  },
  createMail: async (args) => {
    try{
    const mail = await axios.post("http://localhost:4040/mails", args.data)
    console.log(mail.data)  
    return mail.data
  }catch(e){
      throw new Error(e)
    }
  },
  mail : async (args) => {
      const { id } = args;
      const mail = await axios.get(`http://localhost:4040/mails/${id}`)
      if(mail){
        return mail.data;
      }else{
        throw new Error("Not Found")
      }
  },
  updateMail : () => {},
  deleteMail : () => {}

};
