import db from './index';
import Sequelize from 'sequelize';

export const Election = db.define('elections', {
  locationName: {
    type: Sequelize.STRING
  },
  locationNameAbbrev: {
    type: Sequelize.STRING
  },
  locationType: {
    type: Sequelize.STRING
  },
  electionType: {
    type: Sequelize.STRING
  },
  electionTypeDetail: {
    type: Sequelize.STRING
  },
  electionDate: {
    type: Sequelize.STRING
  },
  electionDayRegistrationAvail: {
    type: Sequelize.BOOLEAN
  },
  additionalInfo: {
    type: Sequelize.STRING
  },
  url: {
    type: Sequelize.STRING
  }

});

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