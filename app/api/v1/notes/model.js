const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../../db");

class Notes extends Model {}

Notes.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.BIGINT,
      references: { model: "users", key: "id" },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Notes",
  }
);

module.exports = Notes;
