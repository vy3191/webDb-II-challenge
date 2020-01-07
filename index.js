const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");

const PORT = 8500;
const server = express();
const carRoutes = require("./routers/carRoutes");

server.use(express.json());
server.use(helmet());
server.use(logger('dev'));
server.use("/api/cars", carRoutes);
server.use((error, req, res, next) => {
   res.status(500).json({
      message: `Something went wrong with the server`
   })
})

server.listen(PORT, () => {
   console.log(`\n=== Web API Listening on http://localhost:${PORT}===\n`);
})