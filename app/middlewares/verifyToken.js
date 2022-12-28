const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const responseData = require("../helpers/responseData");
const extractToken = require("../helpers/extractToken");
require("dotenv").config();

const auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1];

    if (!token) {
      return res.send(
        responseData(StatusCodes.UNAUTHORIZED, "Unauthorized", null, null)
      );
    }

    const secretKey = process.env.JWT_TOKEN;
    const verify = jwt.verify(token, secretKey);

    if (!verify) {
      return res.send(
        responseData(StatusCodes.UNAUTHORIZED, "Unauthorized", null, null)
      );
    }

    next();
  } catch (error) {
    return res.send(responseData(StatusCodes.BAD_REQUEST, "", error, null));
  }
};

module.exports = auth;
