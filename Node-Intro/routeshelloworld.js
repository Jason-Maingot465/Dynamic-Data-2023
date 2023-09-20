// Setup our server
const http = require('http')
const port = process.env.PORT || 3000;
const server = http.createServer((request, response) => {
    const path = request.url
    if ((request.url == "") || (request.url == "/")) {
        response.writeHead(200 , { "Content-Type" : "Text/Plain" });
        response.end("Home Page");
    } else if (request.url == "/contact") {
        response.writeHead(200 , { "Content-Type" : "text/plain" })
        response.end("Contact Us")
    } else if (request.url == "/about") {
        response.writeHead(200 , { "Content-Type" : "text/plain" })
        response.end("About Us")
    } else {
        response.writeHead(404 , { "Content-Type" : "text/plain"})
        response.end("Not Found")
    }

})

// Start Server
server.listen(port, () => console.log("Server started on port " + port + " press ctrl + c to stop"))