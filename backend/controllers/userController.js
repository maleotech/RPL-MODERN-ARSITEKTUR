import User from "../models/userModel.js";

export const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
      res.status(200).send(user);
    } else {
      res.json({
        message: "Login Fail",
        user,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const registerController = async (req, res) => {
  try {
    const newUser = new User({ ...req.body, verified: true });
    await newUser.save();
    res.status(200).send("New User Added Successfully!");x
  } catch (error) {
    console.log(error);
  }
};
