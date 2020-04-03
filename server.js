const express = require("express");

const server = express();

server.use(express.static("public"))

server.get("/", function(req, res){
    return res.sendfile(__dirname + "/index.html");
})

server.get("/ideias", function(req, res){ 
    return res.sendfile(__dirname + "/ideias.html");
})

server.listen(4000);