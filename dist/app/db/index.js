'use strict';

var Sequelize = require('sequelize');

module.exports = new Sequelize('postgres://localhost:5432/noExcuses', {
  logging: false // prevents logging of all queries made
});