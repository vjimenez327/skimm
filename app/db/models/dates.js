import db from './index';
import Sequelize from 'sequelize';

export const Date = db.define('dates', {
  type: {
    type: Sequelize.STRING
  },
  dateTypeId:{
    type: Sequelize.INTEGER
  },
  additionalInfo: {
    type: Sequelize.STRING
  },
  shortDate: {
    type: Sequelize.STRING
  },
  longDate: {
    type: Sequelize.STRING
  }
});

export default Date;