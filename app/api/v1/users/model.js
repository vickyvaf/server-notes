const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../../db");
const Notes = require("../notes/model");

class Users extends Model {}

Users.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Users",
  }
);

Users.hasMany(Notes, { foreignKey: "userId" });
Notes.belongsTo(Users, { foreignKey: "userId" });

module.exports = Users;
