// Setup our server
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
// Get the url
const path = request.url;

if ((path == "") || (path == "/")) {
    response.writeHead(200 , { "Content-Type" : "Text/Plain" });
    response.end("Home Page");
} else if (path == "/about") {
    response.writeHead(200 , { "Content-Type" : "Text/Plain" });
    response.end("About Page");
} else if (path == "/contact") {
    response.writeHead(200 , { "Content-Type" : "Text/html" });
    response.end("<h1>Contact Us</h1>");
} else {
    response.writeHead(404 , { "Content-Type" : "Text/Plain" });
    response.end("Not Found");
}
})

// Start Server
server.listen(port, () => console.log("Server started on port " + port + " press ctrl + c to stop"))