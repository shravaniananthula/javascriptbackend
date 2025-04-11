const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("shravaniananthula");
});
app.get("/login", (req, res) => {
  res.send("<h1>please login at this website</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>chai aur code</h2>");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
