const express = require("express");

const mongoose = require("mongoose");
const Blog = require("./models/blog");

// express app
const app = express();

// connect to mongodb
const dbUri =
  "mongodb+srv://shahzaib:test@123@node-crash-course.ly3l3.mongodb.net/node-tuts?retryWrites=true&w=majority";

mongoose
  .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => app.listen(3000))
  .catch((error) => console.log(error));

// register view engine
app.set("view engine", "ejs");

app.use(express.static("public"));

// mongoose and mongo sandbox routes

// routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  //   res.send("Hello Mr About");
  res.render("about", { title: "About" });
});

// blog route

app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) =>
      res.render("index", { title: "All blogs", blogs: result })
    );
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new Blog" });
});

// 404
// this functin fires on every get request
// we should put this function at very bottom
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
