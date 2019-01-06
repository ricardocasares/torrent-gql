const cors = require("cors");
const polka = require("polka");
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
