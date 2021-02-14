const bcrypt = require("bcrypt");

const isValidPassword = async (plainTextPassword, hash) => {
  const match = await bcrypt.compare(plainTextPassword, hash);

  return match;
};

module.exports = isValidPassword;
