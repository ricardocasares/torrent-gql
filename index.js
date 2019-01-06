const polka = require("polka");
const cors = require("cors");
const graphql = require("express-graphql");
const schema = require("./schema");

polka()
  .use(cors())
  .use(
    "/",
    graphql({
      schema,
      graphiql: true
    })
  )
  .listen(3000);
