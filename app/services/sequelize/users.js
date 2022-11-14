const Users = require("../../api/v1/users/model");

const getAllUsers = async () => {
  const result = await Users.findAll()

  return result
}

const createUsers = async (req) => {
  const { nip, nama, password } = req.body

  const result = await Users.create({
    nip,
    nama,
    password
  })

  return result
}

module.exports = {
  getAllUsers,
  createUsers
}