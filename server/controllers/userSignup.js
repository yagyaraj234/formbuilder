const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const userSignup = async (req, res) => {
  try {
    const newuser = req.body;
    const user = await userModel.findOne({ email: req.body.email });

    // Checking for existing user
    if (user) {
      return res.status(409).json({ message: "User already exists" });
    }
    // checking for password match
    // if (newuser.password !== newuser.confirmpassword) {
    //   return res.json({ message: "Password does not match" });
    // }
    // creating salt
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new userModel({
      ...req.body,
      password: hashPassword,
      confirmpassword: hashPassword,
    }).save();
    res.status(201).send({ message: "User created Succesfully" });
  } catch (error) {
    // console.log(error);
    res.json({ message: "Failed", error: error });
    console.log(error);
  }
};

module.exports = userSignup;
