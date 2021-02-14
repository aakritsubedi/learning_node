const userModel = require("../model/users");

const createUser = async (user) => {
  const userResponse = await userModel.createUser(user);

  return userResponse;
};

const fetchUsers = async () => {
  const userResponse = await userModel.fetchUsers();

  return userResponse;
};

const fetchUserById = async (id) => {
  const userResponse = await userModel.fetchUserById(id);

  return userResponse;
};

const updateUser = async (id, user) => {
  const userResponse = await userModel.updateUser(id, user);

  return userResponse;
};

const deleteUser = async (id) => {
  const userResponse = await userModel.deleteUser(id);

  return userResponse;
}

const login = async (user) => {
  const loginResponse = await userModel.login(user);
  
  return loginResponse;
}

module.exports = {
  createUser,
  fetchUsers,
  fetchUserById,
  updateUser,
  deleteUser,
  login
};
