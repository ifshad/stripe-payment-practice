const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("This is Server. Lets go...");
});

app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
