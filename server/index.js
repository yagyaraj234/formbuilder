const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./dbConnect");
const userSignup = require("./controllers/userSignup");

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
dbConnect();

app.post("/signup", userSignup);

app.listen(PORT, () => {
  console.log(`app listening to port ${PORT}`);
});
