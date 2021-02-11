const fs = require('fs');
const path = require('path');
const http = require("http");


// Serving HTML file
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  const myReadStream = fs.createReadStream(path.join(__dirname, "../statics/aboutMe.html"));
  myReadStream.pipe(res);
});

const PORT = 3000;
server.listen(PORT, "127.0.0.1");
console.log("The server is listening at PORT " + PORT);
