const express = require("express");

// express app
const app = express();

// listen for the requests
app.listen(3000);

app.get("/", (req, res) => {
  //   res.send([
  //     { name: "Ram", email: "Ram@gmail.com" },
  //     { name: "Bob", email: "bob32@gmail.com" },
  //   ]);
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  //   res.send("Hello Mr About");
  res.sendFile("./views/about.html", { root: __dirname });
});

// redurects
app.get("about-me", (req, res) => {
  //   res.send("Hello Mr About");
  res.redirect("/about");
});

// 404
// this functin fires on every get request
// we should put this function at very bottom
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
