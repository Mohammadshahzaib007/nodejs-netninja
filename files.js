const fs = require("fs");

// reading files
//this function takes two arguments first - relative path and second - function

// this asynchronous
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// writing files
// fs.writeFile("./docs/blog1.txt", "hello World", () => {
//   console.log("Done");
// });

// fs.writeFile("./docs/blog2.txt", "hello World again", () => {
//     console.log("Done");
//   });

//  directories
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) console.log(err);
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) =>
//     err ? console.log(err) : console.log("Folder Deleted")
//   );
// }

// deleting files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    err ? console.log(err) : console.log("File Deleted");
  });
}
