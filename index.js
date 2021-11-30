const bodyParser = require('body-parser');
const express = require("express");
const routesProducts = require("./routes/index.js")
const routesUsers = require("./routes/user.js")
require("dotenv").config({path:"./config/.env"});
require("./config/db");
const server = express();

server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

server.use(bodyParser.json());

routesProducts(server);
routesUsers(server);

server.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);    
})

server.get("/test", (req, res) => {
    res.send({
        result: "Petit test de tout ça laaaaaaa"
    })
})
