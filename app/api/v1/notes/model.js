const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../../db')

class Note extends Model { }

Note.init(
  {
    title: {
      type: DataTypes.STRING
    },
    notes: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName: 'Notes'
  }
)

module.exports = Note