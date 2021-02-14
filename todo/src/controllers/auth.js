const userService = require("../services/users");

const login = async (req, res, next) => {
  const user = req.body;

  try {
    const loginResponse = await userService.login(user);

    res.status(200).json(loginResponse);
  } catch (err) {
    next("Unable to login.");
  }
}

module.exports = {
  login
}