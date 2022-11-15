const { getAllUsers, getOneUsers, createUsers, updateUsers, deleteUsers } = require('../../../services/sequelize/users')
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

const find = async (req, res, next) => {
  try {
    const result = await getOneUsers(req)

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

const update = async (req, res, next) => {
  try {
    const result = await updateUsers(req)

    res.status(StatusCodes.CREATED).json({
      message: 'data updated',
      data: result
    })
  } catch (error) {
    next(error)
  }
}

const destroy = async (req, res, next) => {
  try {
    const result = await deleteUsers(req)

    res.status(StatusCodes.OK).json({
      message: 'data deleted',
      data: result
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  index,
  find,
  create,
  update,
  destroy
}