const { StatusCodes } = require("http-status-codes");
const User = require("../users/model");
const responseData = require("../../../helpers/responseData");
const passwordHashing = require("../../../helpers/passwordHashing");
const passwordCompare = require("../../../helpers/passwordCompare");
const generateToken = require("../../../helpers/generateToken");

const register = async (req, res) => {
  try {
    const { name, username, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.send(
        responseData(
          500,
          "password and confirm password doesn't match",
          null,
          null
        )
      );
    }

    const hashedPassword = await passwordHashing(password);
    const user = await User.create({
      name,
      username,
      email,
      password: hashedPassword,
    });

    return res.send(responseData(StatusCodes.CREATED, "created", null, user));
  } catch (error) {
    return res.send(responseData(StatusCodes.BAD_REQUEST, "", error, null));
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      return res.send(
        responseData(
          StatusCodes.UNAUTHORIZED,
          "wrong email or password",
          null,
          null
        )
      );
    }

    const matched = await passwordCompare(password, user.password);

    if (!matched) {
      return res.send(
        responseData(
          StatusCodes.UNAUTHORIZED,
          "wrong email or password",
          null,
          null
        )
      );
    }

    const dataUser = {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
    };

    const token = generateToken(dataUser);

    await user.save();

    const responseUser = {
      token: token,
    };

    return res.send(responseData(StatusCodes.OK, "OK", null, responseUser));
  } catch (error) {
    return res.send(responseData(StatusCodes.BAD_REQUEST, "", error, null));
  }
};

module.exports = { register, login };
