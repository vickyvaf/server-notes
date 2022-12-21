const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: process.env.DB,
    host: process.env.HOST,
  }
);

// sequelize
//   .sync()
//   .then(() => {
//     console.log("database ready...");
//   })
//   .catch((err) => console.log(err.message));

module.exports = sequelize;
