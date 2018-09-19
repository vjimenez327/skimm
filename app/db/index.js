import Sequelize from 'sequelize';

module.exports = new Sequelize('postgres://localhost:5432/noExcuses', {
  logging: false 
});

