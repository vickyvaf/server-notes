const jwt = require("jsonwebtoken");
require("dotenv").config();

const extractToken = (token) => {
  const secretKey= process.env.JWT_TOKEN;

  let responseData;

  const res = jwt.verify(token, secretKey, (error, decoded) => {
    if (error) {
      responseData = null;
    } else {
      responseData = decoded;
    }
  });

  if (responseData) {
    const result = responseData;
    return result;
  }

  return null;
};

module.exports = extractToken;
