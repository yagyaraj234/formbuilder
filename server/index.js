const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const dbConnect = require("./dbConnect");
const userSignup = require("./controllers/userSignup");
const userLogin = require("./controllers/userLogin");

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(cors());
dbConnect();

app.post("/signup", userSignup);
app.post("/login", userLogin);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`app listening to port ${PORT}`);
});
