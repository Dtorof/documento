import { DataTypes } from "sequelize";
import { db } from "../db/db.js";
import User from "./users.model.js";
import Status from "./status.model.js";

const { INTEGER, STRING, DATE } = DataTypes;

export const DigitalDocument = db.define('digital_document', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: STRING, allowNull: false },
  descrip: { type: STRING, allowNull: false },
  file: { type: STRING, allowNull: false, unique: true },
  createdAt: { type: DATE, allowNull: false, defaultValue: DataTypes.NOW },
  updatedAt: { type: DATE, allowNull: false, defaultValue: DataTypes.NOW },
  idUser: { type: INTEGER, allowNull: false },
  idStatus: { type: INTEGER, allowNull: false }
});

// Relations
DigitalDocument.belongsTo(User, { foreignKey: 'idUser', as: 'documentOwner' });
DigitalDocument.belongsTo(Status, { foreignKey: 'idStatus', as: 'documentStatus' });

// Inverse relations
User.hasMany(DigitalDocument, { foreignKey: 'idUser', as: 'documents' });
Status.hasMany(DigitalDocument, { foreignKey: 'idStatus', as: 'documents' });

export default DigitalDocument;
