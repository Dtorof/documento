import { DataTypes } from "sequelize";
import { db } from "../db/db.js";
import PhysicalDocument from "./physicalDocument.model.js";

const { INTEGER, STRING } = DataTypes;

export const Ticket = db.define('ticket', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  description: { type: STRING, allowNull: false },
  idPhysicalDocument: { type: INTEGER, allowNull: false }
});

Ticket.belongsTo(PhysicalDocument, { foreignKey: 'idPhysicalDocument', as: 'ticketPhysicalDocument' });

// Inverse relationship
PhysicalDocument.hasMany(Ticket, { foreignKey: 'idPhysicalDocument', as: 'tickets' });

export default Ticket;
