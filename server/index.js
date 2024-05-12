require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const port = 3000;

app.use(cors({
    origin: "http://localhost:5500" // restrict calls to those this address
}));

app.get("/", (req, res) => {
  res.send("This is Server. Lets go...");
});

app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
