const fs = require("fs");
const http = require('http');

// Creating a server and PIPEing the response
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  const myReadStream = fs.createReadStream(__dirname + "/readme.txt");
  myReadStream.pipe(res); //res is a writeable stream
});

const PORT = 3000;
server.listen(PORT, "127.0.0.1");
console.log("The server is listening at PORT " + PORT);
