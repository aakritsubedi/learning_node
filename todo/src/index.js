require('dotenv').config();
const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.status(200).json({
    name: "TODO",
    version: "1.0.0",
  });
});


app.listen(process.env.APP_PORT || 3000);
