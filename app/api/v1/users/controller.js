const { getAllUsers, createUsers } = require('../../../services/sequelize/users')
const {StatusCodes} = require('http-status-codes')

const index = async (req, res, next) => {
  try {
    const result = await getAllUsers()

    res.status(StatusCodes.OK).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
}

const create = async (req, res, next) => {
  try {
    const result = await createUsers(req)

    res.status(StatusCodes.CREATED).json({
      message: 'user created',
      data: result
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  index,
  create
}