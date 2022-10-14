const express = require("express");
const notes = require("./data/notes");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.listen(5000, console.log("server is on localhost:5000"));
