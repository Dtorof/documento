const sequelize = require('./models');

sequelize
  .authenticate()
  .then(() => {
    console.log('La conexión ha sido establecida exitosamente.');
  })
  .catch(err => {
    console.error('No se puede conectar a la base de datos:', err);
  })
  .finally(() => {
    sequelize.close(); // Asegúrate de cerrar la conexión
  });
