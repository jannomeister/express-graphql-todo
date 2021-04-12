const { LogModel } = require("../models");

const create = async (log) => {
  return await LogModel.create(log);
};

const findAll = async () => {
  return await LogModel.findAll();
};

const findOne = async () => {
  return await LogModel.findOne();
};

const update = async (id, data) => {
  return await LogModel.update(data, { where: { id } });
};

const remove = async (id) => {
  return await LogModel.destroy({ where: { id } });
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
