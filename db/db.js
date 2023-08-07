import Sequelize from "sequelize";

// Configurar la instancia de Sequelize con la información directa
export const db = new Sequelize('railway', 'postgres', 'D1HxW0GEuhMEly8ismLA', {
  host: 'containers-us-west-120.railway.app',
  dialect: "postgres",
  port: 5809,
});
