const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");

const PORT = 8500;
const server = express();


server.use(express.json());
server.use(helmet());
server.use(logger('dev'));



server.listen(PORT, () => {
   console.log(`\n=== Web API Listening on http://localhost:${PORT}===\n`);
})