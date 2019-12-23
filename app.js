const express = require("express");
const app = express();
const path = require("path");

const port = 8080;
const options = {
  root: path.join(__dirname, "")
};

app.get("/", function(req, res) {
  res.sendFile("./index.html", options);
});

app.get("/about", function(req, res) {
  res.sendFile("./about.html", options);
});

app.get("/contact", function(req, res) {
  res.sendFile("./contact.html", options);
});

app.use((req, res, next) => {
  res.status(404).sendFile("./404.html", options);
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
