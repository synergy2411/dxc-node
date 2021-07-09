// const { v4 } =require("uuid");

// const mails = [
//     {_id : "101", subject : "The subject 1", content : "The content 1", receiver : "the receiver 1"},
//     {_id : "102", subject : "The subject 2", content : "The content 2", receiver : "the receiver 2"},
//     {_id : "103", subject : "The subject 3", content : "The content 3", receiver : "the receiver 3"},
// ]

const axios = require("axios").default;

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
    const result = await axios.get("http://localhost:4000/mails")
    console.log(result.data)
    return result.data
    // return mails;
  },
  createMail: (args) => {
    let mail = {
        _id : v4(),
        ...args.data
    }
    mails.push(mail);
    return mail;
  },
  mail : (args) => {
      const { id } = args;
      console.log("ID - ", id);
      const foundMail = mails.find(mail => mail._id === id)
      if(foundMail){
          return foundMail;
    }else{
          throw new Error("Not found for ID - ", id)
      }
  }
};
