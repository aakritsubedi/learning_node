const fs = require("fs");

// Readable and Writeable Stream
const myReadStream = fs.createReadStream(__dirname + "/readme.txt");
const myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

// Using PIPE
myReadStream.pipe(myWriteStream);
