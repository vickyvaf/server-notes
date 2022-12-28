const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (data) => {
  const token = jwt.sign(data, process.env.JWT_TOKEN, {
    expiresIn: "24h",
  });

  return token;
};

module.exports = generateToken;
