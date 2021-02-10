const http = require("http");

// Creating a server in Node.Js
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("This is our first server in Node.js");
});

const PORT = 3000;
server.listen(PORT, "127.0.0.1");
console.log("The server is listening at PORT " + PORT);
