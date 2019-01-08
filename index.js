#!/usr/bin/env node
const cors = require("cors");
const polka = require("polka");
const graphql = require("express-graphql");
const schema = require("./schema");

const server = polka()
  .use(cors())
  .use(
    "/",
    graphql({
      schema,
      graphiql: true
    })
  );

module.exports = server;
