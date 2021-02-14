const jwt = require("jsonwebtoken");
const createResponse = require("./createResponse");

const prepareJWT = (payload, expiresIn) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: expiresIn,
  });

  return token;
};

const verifyJWT = (token) => {
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return createResponse("failed", "Failed to validate token.");
  }

  return createResponse("success", decoded);
};

module.exports = {
  prepareJWT,
  verifyJWT,
};
