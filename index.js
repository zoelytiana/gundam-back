const bodyParser = require("body-parser");
const express = require("express");
const routesProducts = require("./routes/index.js");
const routesUsers = require("./routes/user.js");
const routesOrders = require("./routes/order.js");
const routesWishs = require("./routes/wish.js");

require("dotenv").config({ path: "./config/.env" });
require("./config/db");
// const cors = require("cors");
const server = express();

// server.use(cors());

//CORS header
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Prise en charge du JSON.
server.use(bodyParser.json());

routesOrders(server);
routesProducts(server);
routesUsers(server);
routesWishs(server);

server.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

server.get("/test", (req, res) => {
  res.send({
    result: "Petit test de tout ça laaaaaaa",
  });
});
