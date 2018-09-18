import Dates from './dates';
import Elections from './elections';

 Dates.belongsTo(Elections);
 Elections.hasMany(Dates);

