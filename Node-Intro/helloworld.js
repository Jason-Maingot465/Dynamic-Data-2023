// Setup our server
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
    response.writeHead(200 , { "Content-Type" : "Text/Plain" });
    response.end("Hello World");
})

// Start Server
server.listen(port, () => console.log("Server started on port " + port + " press ctrl + c to stop"))