const http = require("node:http");

const server = http.createServer(function(req, res) {

    if (req.url === "/getSecretData"){
        res.end("Blank page is your secret data.");
    }
    res.end("Hello World!");
});

server.listen(7777);