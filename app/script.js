const express = require("express");

const server = express();

server.get('/', (req, res) => {
    res.send("Hello students!");
})

server.listen(3000);