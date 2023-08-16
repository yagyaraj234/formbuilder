import userModel from "../models/userModel";

const userSignup = async (req, res) => {
  try {
    const user = req.body;
    console.log(user);
    const newuser = new userModel(user);
    userModel.save();
  } catch (error) {
    console.log(error);
  }
};

module.exports = userSignup;
