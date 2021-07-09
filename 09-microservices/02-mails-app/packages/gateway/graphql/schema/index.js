const { buildSchema } = require("graphql")

module.exports = buildSchema(`
type RootQuery {
    hello : String
    me : User
    mails : [Mail]
    mail(id : String) : Mail
} 
type Mail {
    _id : ID!
    subject : String
    content : String
    receiver : String
}
type User {
    id : ID!
    name : String
    email : String
    age : Int
}
type RootMutation {
    createMail(data : CreateMailInput) : Mail
    deleteMail(id : String) : Mail
    updateMail(id : String, data : UpdateMailInput ) : Mail
}
input UpdateMailInput {
    subject : String 
    content : String 
    receiver : String
}
input CreateMailInput {
    subject : String
    content : String
    receiver : String
}
schema {
    query : RootQuery
    mutation : RootMutation
}
`)