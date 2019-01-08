#!/usr/bin/env node
const server = require("./");
const port = parseInt(process.argv.slice(3), 10);

const log = msg => err => {
  if (err) throw new Error(err);
  console.log(msg);
};

if (!port || isNaN(port)) {
  throw new Error("You must provide --port NUMBER");
}

server.listen(port, log(`> Listening on http://localhost:${port}/`));
