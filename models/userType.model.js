import { DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { INTEGER, STRING } = DataTypes;

export const UserType = db.define('userType', {
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

export default UserType;
