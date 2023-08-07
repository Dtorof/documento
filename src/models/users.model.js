import { DataTypes } from "sequelize";
import { db } from "../db/db.js";
import Status from "./status.model.js";
import DocumentType from "./documentType.model.js";
import UserType from "./userType.model.js";// Importa el modelo UserType
import Department from "./department.model.js"; 
const { STRING, INTEGER, DATE } = DataTypes;

export const User = db.define('user', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  firstName: { type: STRING, allowNull: false },
  lastName: { type: STRING, allowNull: false },
  email: { type: STRING, allowNull: false },
  cellphone: { type: STRING, allowNull: false },
  dateOfBirth: { type: DATE, allowNull: false },
  createdAt: { type: DATE, allowNull: false },
  updatedAt: { type: DATE, allowNull: false },
  gender: { type: INTEGER, allowNull: false },
  documentType: { type: INTEGER, allowNull: false },
  userType: { type: INTEGER, allowNull: false },
  department: { type: INTEGER, allowNull: false },
  status: { type: INTEGER, allowNull: false },
  documentNumber: { type: STRING, allowNull: false },
  password: { type: STRING, allowNull: false },
  userName: { type: STRING, allowNull:false }
});
User.belongsTo(Status, { foreignKey: 'status', as: 'userStatus' });
User.belongsTo(DocumentType, { foreignKey: 'documentType', as: 'userDocumentType' });
User.belongsTo(UserType, { foreignKey: 'userType', as: 'userUserType' });
User.belongsTo(Department, { foreignKey: 'department', as: 'userDepartment' });

// Inverse relationships
Status.hasMany(User, { foreignKey: 'status', as: 'users' });
DocumentType.hasMany(User, { foreignKey: 'documentType', as: 'users' });
UserType.hasMany(User, { foreignKey: 'userType', as: 'users' });
Department.hasMany(User, { foreignKey: 'department', as: 'users' });

export default User;
