const db = require("../db");

const jwt = require("../utils/jwt");
const isValidPassword = require("../utils/verifyHash");
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

const login = async (user) => {
  const { email, password } = user; 
  
  const sql = `SELECT * FROM users WHERE email='${email}'`; 

  const loginResponse = await db.raw(sql);
  const { rows } = loginResponse;
  const isValid = isValidPassword(password, rows[0].password);

  if (loginResponse && isValid) {
    const userData = {
      email: email,
      userId: rows[0].id,
    }
    const token = jwt.prepareJWT(userData, process.env.JWT_EXPIRES_IN);
    const response = {
      userId: rows[0].id,
      email: email,
      token: token
    }
    return createResponse("success", response);
  }

  return createResponse("failed", `Unable to login. Wrong email or password.`);
}

module.exports = {
  createUser,
  fetchUsers,
  fetchUserById,
  updateUser,
  deleteUser,
  login
};
