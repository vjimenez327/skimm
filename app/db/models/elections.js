import db from './index';
import Sequelize from 'sequelize';

export const Election = db.define('elections', {
  stateName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  stateNameAbbrev: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  TypeDetail: {
    type: Sequelize.STRING
  },
  electionDate: {
    type: Sequelize.STRING,
    isDate: true,
    isAfter: Sequelize.NOW,
    allowNull: false
  },
  DayRegistrationAvail: {
    type: Sequelize.BOOLEAN
  },
  additionalInfo: {
    type: Sequelize.TEXT
  },
  url: {
    type: Sequelize.STRING,
    isUrl: true
  }

});

//Possible Useful Methods

Election.prototype.stateCheck = () => {
  try{
    if (isValidState(this.stateName) === undefined){
      return this.stateName;
    } 
  } catch (err) {
    console.log(`${err} is not a state`);
  } 
};

Election.beforeCreate(stateCheck);

export default Election;

/*
Properties most likely not needed that are the same across objects:
created_at
updated_at
election level
election status
use_overseas_dates_as_military_dates
is_public
*/