import { DataTypes } from "sequelize";
import { db } from "../db/db.js";
import User from "./users.model.js";
import Status from "./status.model.js";

const { INTEGER, STRING, DATE } = DataTypes;

export const PhysicalDocument = db.define('physical_document', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: STRING, allowNull: false },
  descrip: { type: STRING, allowNull: false },
  createdAt: { type: DATE, allowNull: false },
  updatedAt: { type: DATE, allowNull: false },
  idUser: { type: INTEGER, allowNull: false },
  idStatus: { type: INTEGER, allowNull: false },
});

PhysicalDocument.belongsTo(User, { foreignKey: 'idUser', as: 'documentUser' });
PhysicalDocument.belongsTo(Status, { foreignKey: 'idStatus', as: 'physicalDocumentStatus' });

// Inverse relationships
User.hasMany(PhysicalDocument, { foreignKey: 'idUser', as: 'PyshicalDocuments' });
Status.hasMany(PhysicalDocument, { foreignKey: 'idStatus', as: 'PyshicalDocuments' });

export default PhysicalDocument;
