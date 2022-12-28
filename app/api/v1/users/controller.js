const {
  getAllUsers,
  getOneUsers,
  createUsers,
  updateUsers,
  deleteUsers,
} = require("../../../services/users");
const { StatusCodes } = require("http-status-codes");

const index = async (req, res, next) => {
  try {
    const result = await getAllUsers();

    res.status(StatusCodes.OK).json({
      users: result,
    });
  } catch (error) {
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    const result = await getOneUsers(req);

    res.status(StatusCodes.OK).json({
      users: result,
    });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await createUsers(req);

    res.status(StatusCodes.CREATED).json({
      message: "user created",
      users: result,
    });
  } catch (error) {
    console.log("error: ", error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};

const update = async (req, res, next) => {
  try {
    const result = await updateUsers(req);

    res.status(StatusCodes.CREATED).json({
      message: "data updated",
      users: result,
    });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await deleteUsers(req);

    res.status(StatusCodes.OK).json({
      message: "data deleted",
      users: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  index,
  find,
  create,
  update,
  destroy,
};
