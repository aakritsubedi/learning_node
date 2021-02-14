const db = require("../db");
const createResponse = require("../utils/createResponse");

const createUser = async ({ fullname, email, password }) => {
  const sql = `INSERT INTO users(fullname, email, password) VALUES('${fullname}','${email}', '${password}')`;

  const userResponse = await db.raw(sql);
  if (userResponse) {
    return createResponse("success", "User added successfully.");
  }

  return createResponse("failed", "Unable to add user.");
};

const fetchUsers = async () => {
  const sql = "SELECT * FROM users";

  const userResponse = await db.raw(sql);
  if (userResponse) {
    return createResponse("success", userResponse.rows);
  }

  return createResponse("failed", "Unable to fetch all user.");
};

const fetchUserById = async (id) => {
  const sql = `SELECT * FROM users WHERE id =${id}`;

  const userResponse = await db.raw(sql);
  if (userResponse) {
    return createResponse("success", userResponse.rows);
  }

  return createResponse("failed", `Unable to fetch user by id ${id}.`);
};

const updateUser = async (id, user) => {
  let data = "";
  let count = 0;
  for (const [key, value] of Object.entries(user)) {
    count++;
    if (count === Object.keys(user).length) {
      data += isNaN(value) ? `${key} = '${value}' ` : `${key} = ${value} `;
    } else {
      data += isNaN(value) ? `${key} = '${value}', ` : `${key} = ${value}, `;
    }
  }

  const sql = `UPDATE users SET ${data} WHERE id = ${id}`;
  const userResponse = await db.raw(sql);
  if (userResponse) {
    return createResponse("success", "User data updated successfully.");
  }

  return createResponse("failed", `Unable to update user of id ${id}.`);
};

const deleteUser = async (id) => {
  const sql = `DELETE FROM users WHERE id = ${id}`;
  const userResponse = await db.raw(sql);
  if (userResponse) {
    return createResponse("success", "User data deleted successfully.");
  }

  return createResponse("failed", `Unable to delete user of id ${id}.`);
};

module.exports = {
  createUser,
  fetchUsers,
  fetchUserById,
  updateUser,
  deleteUser
};
