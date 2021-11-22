const express = require("express");
const routes = require("./routes/index.js")
require("dotenv").config({path:"./config/.env"});
require("./config/db");
const server = express();

routes(server);

server.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);    
})

server.get("/test", (req, res) => {
    res.send({
        result: "Petit test de tout ça laaaaaaa"
    })
})