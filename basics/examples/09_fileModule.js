const fs = require("fs");

// Reading a file content
fs.readFile("./basics/examples/randomFile.txt", "utf8", function (err, data) {
  if (err) console.log(err);

  console.log(data);
});

// Alternatively, you can use the synchronous version
try {
  const data = fs.readFileSync("./basics/examples/randomFile.txt", "utf8");
  console.log(data);
} catch (err) {
  console.error(err);
}

// Both fs.readFile() and fs.readFileSync() read the full content of the file in memory before returning the data.

// Writing a file
const content = "I am working as Software Engineer.";

fs.writeFile("./basics/examples/myNewFile.txt", content, (err) => {
  if (err) console.error(err);

  console.log("File written successfully");
});

// Alternatively, you can use the synchronous version
try {
  const data = fs.writeFileSync("./basics/examples/randomFile.txt", content);
  console.log(data);
} catch (err) {
  console.error(err);
}

// By default, this API will replace the contents of the file if it does already exist.
// You can modify the default by specifying a flag:
fs.writeFile(
  "./basics/examples/myNewFile.txt",
  content,
  { flag: "a+" },
  (err) => console.log(err)
);

// Append a file
const anotherContent =
  "I have completed my Bachelor in Computer Engineering from Tribhuvan University.";
fs.appendFile("./basics/examples/myNewFile.txt", anotherContent, (err) => {
  if (err) console.error(err);

  console.log("Done Appending");
});

// Delete a file
setTimeout(() => {
  fs.unlink("./basics/examples/randomFile.txt", (err) => {
    if (err) console.log(err);

    console.log("File deleted.");
  });
  fs.unlinkSync("./basics/examples/myNewFile.txt");
}, 4000);

// Create and Remove Directory
fs.mkdirSync("./basics/examples/myNewDir");
fs.mkdir("./basics/examples/anotherDirectory", (err) => {
  if (err) console.log(err);

  console.log("Directory Created");
});

fs.rmdir("./basics/examples/anotherDirectory", (err) => {
  if (err) console.log(err);

  console.log("Directory Deleted");
});

fs.rmdirSync("./basics/examples/myNewDir");
