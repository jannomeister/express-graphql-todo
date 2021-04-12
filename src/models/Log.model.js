const { db, DataTypes } = require("../config/db");

const Log = db.define(
  "logs",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    correlationId: {
      field: "correlation_id",
      type: DataTypes.STRING,
      unique: true,
    },
    input: {
      type: DataTypes.STRING,
    },
    output: {
      type: DataTypes.STRING,
    },
  },
  { createdAt: false, updatedAt: false, freezeTableName: true }
);

module.exports = Log;
