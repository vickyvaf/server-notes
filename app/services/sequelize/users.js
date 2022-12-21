const Users = require("../../api/v1/users/model");
const Notes = require("../../api/v1/notes/model");
const bcrypt = require("bcrypt");

const getAllUsers = async () => {
  const result = await Users.findAll({
    attributes: ["id", "name", "username", "email"],
    include: [{ model: Notes }],
  });

  return result;
};

const getOneUsers = async (req) => {
  const { id } = req.params;

  const result = await Users.findOne({
    where: { id: id },
  });

  return result;
};

const createUsers = async (req) => {
  const { name, username, email, password } = req.body;

  const encryptPassword = await bcrypt.hash(password, 10);

  const result = await Users.create({
    name,
    username,
    email,
    password: encryptPassword,
  });

  return result;
};

const updateUsers = async (req) => {
  const { id } = req.params;
  const { name, username, email, password } = req.body;

  const values = {
    name,
    username,
    email,
    password,
  };
  const selector = {
    where: {
      id: id,
    },
  };
  const result = await Users.update(values, selector);

  return result;
};

const deleteUsers = async (req) => {
  const { id } = req.params;

  const result = await Users.destroy({ where: { id: id } });

  return result;
};

module.exports = {
  getAllUsers,
  getOneUsers,
  createUsers,
  updateUsers,
  deleteUsers,
};
