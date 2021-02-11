const fs = require("fs");
const path = require("path");
const http = require("http");

// Serving HTML file
const server = http.createServer(function (req, res) {
  console.log("The request was made: " + req.url);
  if (req.url === "/" || req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const myReadStream = fs.createReadStream(
      path.join(__dirname, "../statics/aboutMe.html")
    );
    myReadStream.pipe(res);
  } else if (req.url === "/json") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const aboutMe = {
      name: "Aakrit Subedi",
      picUrl: "http://aakritsubedi.com.np/newProfilePic.jpg",
      job: "Software Engineer",
      education: "B.E in Computer Science",
      desc:
        "Honors student of Kantipur Engineering College, Computer Engineering. Academic credentials are reinforced by programming experience gained during an internship with some companies.Strong knowledge of object-oriented programing and web development tools using PHP and Java.Known as a self-starter, team player, and multitasker--strive to consistently exceed expectations.",
    };

    res.end(JSON.stringify(aboutMe)); //can only send string or buffer
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Unknown Route visited.");
  }
});

const PORT = 3000;
server.listen(PORT, "127.0.0.1");
console.log("The server is listening at PORT " + PORT);
