const jwt = require("jsonwebtoken");
const createResponse = require("./createResponse");

const prepareJWT = (payload, expiresIn) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: expiresIn,
  });

  return token;
};

const verifyJWT = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  return createResponse("success", decoded);
};

module.exports = {
  prepareJWT,
  verifyJWT,
};
