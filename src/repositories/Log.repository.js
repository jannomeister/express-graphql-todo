// const { LogModel } = require("../models");

const create = async (log) => {
  return true; // await LogModel.create(log);
};

const findAll = async () => {
  return true; // await LogModel.findAll();
};

const findOne = async () => {
  return true; // await LogModel.findOne();
};

const update = async (id, data) => {
  return true; // await LogModel.update(data, { where: { id } });
};

const remove = async (id) => {
  return true; // await LogModel.destroy({ where: { id } });
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
