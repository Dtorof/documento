// request.model.js

import { DataTypes } from "sequelize";
import { db } from "../db/db.js";
import User from "./users.model.js";
import DigitalDocument from "./digitalDocument.model.js";
import PhysicalDocument from "./physicalDocument.model.js";

const { INTEGER, DATE } = DataTypes;

export const Request = db.define('request', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  createdAt: { type: DATE, allowNull: false, defaultValue: DataTypes.NOW },
  updatedAt: { type: DATE, allowNull: false, defaultValue: DataTypes.NOW },
  userId: { type: INTEGER, allowNull: false },
  digitalDocumentId: { type: INTEGER },
  physicalDocumentId: { type: INTEGER }
});

// Relations
Request.belongsTo(User, { foreignKey: 'userId', as: 'requestUser' });
Request.belongsTo(DigitalDocument, { foreignKey: 'digitalDocumentId', as: 'digitalDocumentRequest' });
Request.belongsTo(PhysicalDocument, { foreignKey: 'physicalDocumentId', as: 'physicalDocumentRequest' });

// Inverse relationships
User.hasMany(Request, { foreignKey: 'userId', as: 'requests' });
DigitalDocument.hasMany(Request, { foreignKey: 'digitalDocumentId', as: 'requests' });
PhysicalDocument.hasMany(Request, { foreignKey: 'physicalDocumentId', as: 'requests' });

export default Request;
