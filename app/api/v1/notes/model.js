const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../../db");
const Users = require("../users/model");

class Notes extends Model {}

Notes.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.BIGINT,
    },
    title: {
      type: DataTypes.STRING,
    },
    notes: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Notes",
  }
);

// Notes.hasOne(Users, { foreignKey: "id" });
// Notes.belongsTo(Users, { foreignKey: "userId" });

module.exports = Notes;
