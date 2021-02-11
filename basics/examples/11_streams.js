const fs = require("fs");

// Readable and Writeable Stream
const myReadStream = fs.createReadStream(__dirname + "/readme.txt");
const myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

let chunkCount = 0;
myReadStream.on("data", (chunk) => {
  chunkCount++;
  console.log("New chunk received  - " + chunkCount+ " times.");
  myWriteStream.write(chunk);
});

