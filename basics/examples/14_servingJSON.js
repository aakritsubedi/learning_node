const http = require("http");

// Serving JSON data
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  const aboutMe = {
    name: 'Aakrit Subedi',
    picUrl: 'http://aakritsubedi.com.np/newProfilePic.jpg',
    job: 'Software Engineer',
    education: 'B.E in Computer Science',
    desc: 'Honors student of Kantipur Engineering College, Computer Engineering. Academic credentials are reinforced by programming experience gained during an internship with some companies.Strong knowledge of object-oriented programing and web development tools using PHP and Java.Known as a self-starter, team player, and multitasker--strive to consistently exceed expectations.'
  }

  res.end(JSON.stringify(aboutMe)); //can only send string or buffer
});

const PORT = 3000;
server.listen(PORT, "127.0.0.1");
console.log("The server is listening at PORT " + PORT);
