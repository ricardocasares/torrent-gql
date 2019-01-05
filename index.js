const polka = require("polka");
const graphql = require("express-graphql");
const schema = require("./schema");

polka()
  .use(
    "/",
    graphql({
      schema,
      graphiql: true
    })
  )
  .listen(3000);
