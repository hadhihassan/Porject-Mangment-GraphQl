const express = require("express");
// require("dotenv").config();
const { graphqlHTTP } = require("express-graphql")
const colors = require("colors")
const connectDb = require("./config/db.js")
const PORT = process.env.PORT || 4000;
const schema = require('./schema/schema.js')

const app = express();


// Connect monogodb 
connectDb();

app.use("/graphql",graphqlHTTP({
    schema ,
    graphiql: process.env.NODE_ENV = "development"
}))


app.listen(PORT, console.log(`sever runing on port ${PORT}`.bgWhite.underline.bold))