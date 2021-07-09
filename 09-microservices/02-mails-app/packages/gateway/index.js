const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP} = require("express-graphql");
const PORT = process.env.PORT || 3000

const app = express();
app.use(express.json())

app.use("/graphql", graphqlHTTP({
    schema : buildSchema(`
    type RootQuery {
        hello : String
    } 
    schema {
        query : RootQuery
    }
    `),
    rootValue : {
        hello : () => {
            return "Hello World!!!"
        }
    },
    graphiql : true
}))

app.listen(PORT, () => {console.log("GraphQL Server started at PORT : ", PORT)})