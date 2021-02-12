const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

// Creating an express app
const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// HTTP Methods
app.get("/", function (req, res) {
  res.send("Hello World!! Welcome to express project.");
});

// Adding Routes
app.get("/aboutme", function (req, res) {
  const aboutMe = {
    name: "Aakrit Subedi",
    picUrl: "http://aakritsubedi.com.np/newProfilePic.jpg",
    job: "Software Engineer",
    education: "B.E in Computer Science",
    desc:
      "Honors student of Kantipur Engineering College, Computer Engineering. Academic credentials are reinforced by programming experience gained during an internship with some companies.Strong knowledge of object-oriented programing and web development tools using PHP and Java.Known as a self-starter, team player, and multitasker--strive to consistently exceed expectations.",
  };

  res.json(aboutMe);
});

// Sending Static File
app.get("/profile", function (req, res) {
  res.sendFile(path.join(__dirname, "../../basics/statics/aboutMe.html"));
});

// Dynamic Routing: Route Params
app.get("/info/:name", function (req, res) {
  const myInfo = {
    name: req.params.name,
    office: "Leapfrog Technology",
    address: "Charkhal, Dillibazar",
  };

  res.status(200).json(myInfo);
});

// Query Strings
app.get("/information", function (req, res) {
  const myInfo = {
    name: req.query.name,
    email: req.query.email,
    office: req.query.office,
  };

  res.status(200).json(myInfo);
});

// Post Request
/*
    POST is a request method
    POST requests, ask the server to accept/store data which is enclosed in the body of the request
    Ofter used when submitting forms
*/

app.post("/upload", function(req, res) {
  const { name, college, email } = req.body;
  const myInfo = {
    name: name,
    college: college,
    email: email
  }
  res.status(200).json(myInfo);
});

app.listen(3000);
