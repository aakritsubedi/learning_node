const jwt = require('../utils/jwt');
const createResponse = require('../utils/createResponse');

const authenticate = (req, res, next) => {
  // get the token from the header if present
  let token = req.headers.authorization;

  token = token && token.split(' ')[1];

  // if no token found, return response (without going to the next middelware)
  if (!token) {
    createResponse('failed', 'Access denied. No token provided.');
  }

  try {
    // if can verify the token, set req.user and pass to next middleware
    const jwtKey = process.env.JWT_SECRET;
    const decodedToken = jwt.verifyJWT(token, jwtKey);
    const { message } = decodedToken;
    const { email, userId } = message;
    
    req.email = email;
    req.userId = userId;

    next();
  } catch (err) {
    // if invalid token
    next('Access denied. Invalid token provided.');
  }
};

module.exports = authenticate;
