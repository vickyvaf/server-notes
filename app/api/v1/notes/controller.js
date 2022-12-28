const {
  createNotes,
  deleteNotes,
  getAllNotes,
  getOneNotes,
  updateNotes,
} = require("../../../services/notes");
const responseData = require("../../../helpers/responseData");
const { StatusCodes } = require("http-status-codes");

const index = async (req, res, next) => {
  try {
    const result = await getAllNotes(req);

    return res.send(responseData(StatusCodes.OK, "OK", null, result));
  } catch (error) {
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    const result = await getOneNotes(req);

    return res.send(responseData(StatusCodes.OK, "OK", null, result));
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await createNotes(req);

    return res.send(responseData(StatusCodes.CREATED, "created", null, result));
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {};

const destroy = async (req, res, next) => {
  try {
    const result = await deleteNotes(req);

    return res.send(responseData(StatusCodes.OK, "deleted", null, result));
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
