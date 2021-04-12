const { Sequelize, DataTypes } = require("sequelize");

const DB_TYPE = process.env.DB_TYPE;
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_DATABASE = process.env.DB_DATABASE;

const config = {
  type: DB_TYPE,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  name: DB_DATABASE,
  port: 5432,
};

const sequelize = new Sequelize(
  `${config.type}://${config.user}:${config.password}@${config.host}:${config.port}/${config.name}`
);

module.exports = {
  db: sequelize,
  DataTypes,
};
