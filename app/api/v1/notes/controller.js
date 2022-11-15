const { createNotes, deleteNotes, getAllNotes, getOneNotes, updateNotes } = require('../../../services/sequelize/notes')
const { StatusCodes } = require('http-status-codes')

const index = async (req, res, next) => {
  const result = await getAllNotes()

  res.status(StatusCodes.OK).json({
    data: result
  })
}

const find = async (req, res, next) => {

}

const create = async (req, res, next) => {
  const result = await createNotes(req)

  res.status(StatusCodes.CREATED).json({
    message: 'note successfully created',
    data: result
  })
}

const update = async (req, res, next) => {

}

const destroy = async (req, res, next) => {

}

module.exports = {
  index,
  find,
  create,
  update,
  destroy
}