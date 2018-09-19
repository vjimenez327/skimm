import Dates from './deadlines';
import Elections from './elections';

 Dates.belongsTo(Elections, { foreignKey: { allowNull: false }});
 Elections.hasMany(Dates, { foreignKey: { allowNull: false }});

