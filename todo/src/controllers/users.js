const { genSaltSync, hashSync } = require("bcrypt");

const userService = require("../services/users");

const createUser = async (req, res, next) => {
  const user = req.body;
  const { password } = user;

  const salt = genSaltSync(10);
  const hashPassword = hashSync(password, salt);

  user.password = hashPassword;

  try {
    const userRes = await userService.createUser(user);

    res.status(200).json(userRes);
  } catch (err) {
    next("Unable to add user data.");
  }
};

const fetchUsers = async (req, res, next) => {
  try {
    const userResponse = await userService.fetchUsers();

    res.status(200).json(userResponse);
  } catch (err) {
    next("Unable to fetch all user data.");
  }
};

const fetchUserById = async (req, res, next) => {
  const id = req.params.id;

  try {
    const userResponse = await userService.fetchUserById(id);

    res.status(200).json(userResponse);
  } catch (err) {
    next(`Unable to fetch info of user with id ${id}.`);
  }
};

const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const user = req.body;

  try {
    const userResponse = await userService.updateUser(id, user);

    res.status(200).json(userResponse);
  } catch (err) {
    next(`Unable to update info of user of id ${id}.`);
  }
};

const deleteUser = async (req, res, next) => {
  const id = req.params.id;

  try {
    const userResponse = await userService.deleteUser(id);

    res.status(200).json(userResponse);
  } catch (err) {
    next(`Unable to delete info of user of id ${id}.`);
  }
};

module.exports = {
  createUser,
  fetchUsers,
  fetchUserById,
  updateUser,
  deleteUser
};
