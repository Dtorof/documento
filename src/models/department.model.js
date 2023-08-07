import { DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { INTEGER, STRING } = DataTypes;

export const Department = db.define('department', {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
});

export default Department;
