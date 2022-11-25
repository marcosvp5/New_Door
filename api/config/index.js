const Sequelize = require("sequelize");

const db = new Sequelize("real_state", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;