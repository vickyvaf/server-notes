const {
  createNotes,
  deleteNotes,
  getAllNotes,
  getOneNotes,
  updateNotes,
} = require("../../../services/sequelize/notes");
const { StatusCodes } = require("http-status-codes");

const index = async (req, res, next) => {
  try {
    const result = await getAllNotes(req);

    res.status(StatusCodes.OK).json({
      notes: result,
    });
  } catch (error) {
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    const result = await getOneNotes(req);

    res.status(StatusCodes.OK).json({
      notes: result,
    });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await createNotes(req);

    res.status(StatusCodes.CREATED).json({
      message: "notes created",
      notes: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {};

const destroy = async (req, res, next) => {
  try {
    const result = await deleteNotes(req);

    res.status(StatusCodes.OK).json({
      message: "notes deleted",
      notes: result,
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
