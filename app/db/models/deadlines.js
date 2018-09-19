import db from '.';
import Sequelize from 'sequelize';
import { parseDate } from '../normalizer'
import { METHODS } from 'http';

//assumption: enums listed below are the only valid kinds

export const Deadlines = db.define('deadlines', {
  type: {
    type: Sequelize.ENUM('AVF', 'AVT', 'DBED', 'DBRD', 'DRD', 'EVF', 'EVT', 'OBED', 'OBRD', 'ORD', 'MBRD', 'MBED', 'MRD')
  },
  dateTypeInfo: {
    type: Sequelize.STRING
  },
  shortDate: {
    type: Sequelize.STRING,
    isDate: true
  },
  longDate: {
    type: Sequelize.STRING,
    isDate: true,
  }
});

//Possible Useful Methods

Deadlines.formatLongDate = () => {
  if (Deadlines.longDate != null){
    return Deadlines.longDate = parseDate(Deadlines.longDate);
  } else  {
    return null;
  }
};

// a method that addresses null values and what would be preferred for those values

//possibly sorting by date if is relevant for the use case

User.beforeCreate(formatLongDate);

export default Date;