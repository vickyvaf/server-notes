const Notes = require("../api/v1/notes/model");
const jwt = require("jsonwebtoken");
const checkTokenId = require("../helpers/checkTokenId");
require("dotenv").config();

const getAllNotes = async (req) => {
  const id = checkTokenId(req);

  const result = await Notes.findAll({
    where: { userId: id },
    order: [["id", "DESC"]],
  });

  return result;
};

const getOneNotes = async (req) => {
  const { id } = req.params;

  const result = await Notes.findOne({
    where: { id: id },
  });

  return result;
};

const createNotes = async (req) => {
  const { title, notes } = req.body;

  const id = checkTokenId(req);

  const result = await Notes.create({
    userId: id,
    title,
    notes,
  });

  return result;
};

const updateNotes = async (req) => {
  const { id } = req.params;
  const { title, notes } = req.body;

  const values = {
    title,
    notes,
  };
  const selector = {
    where: {
      id: id,
    },
  };
  const result = await Notes.update(values, selector);

  return result;
};

const deleteNotes = async (req) => {
  const { id } = req.params;

  const result = await Notes.destroy({ where: { id: id } });

  return result;
};

module.exports = {
  getAllNotes,
  getOneNotes,
  createNotes,
  updateNotes,
  deleteNotes,
};
