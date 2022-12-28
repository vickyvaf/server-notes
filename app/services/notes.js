const Notes = require("../api/v1/notes/model");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const responseData = require("../helpers/responseData");
require("dotenv").config();

const getAllNotes = async (req) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];
  const secretKey = process.env.JWT_TOKEN;
  const { id } = jwt.verify(token, secretKey);

  const result = await Notes.findAll({
    where: { userId: id },
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
  const { userId, title, notes } = req.body;

  const result = await Notes.create({
    userId,
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
