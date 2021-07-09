const express = require("express");
const { graphqlHTTP} = require("express-graphql");
const Schema = require("./graphql/schema");
const Resolvers = require("./graphql/resolvers");
const PORT = process.env.PORT || 3000

const app = express();
app.use(express.json())

app.use("/graphql", graphqlHTTP({
    schema : Schema,
    rootValue : Resolvers,
    graphiql : true
}))

app.listen(PORT, () => {console.log("GraphQL Server started at PORT : ", PORT)})