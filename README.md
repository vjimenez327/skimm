Skimm No Excuses Exercise

Assumptions:
  - focus for this exercise is on the dates per state
  - any other type of territory defined as anything other than a state is not relevant to save to the db
  - renaming fields is for purposes of clarity 
  -  preserving state election info other than states deadlines may be required for future use cases or other No Excuses projects
  - there are only a handful of common date_kinds used in the deadlines table
  - the dates information would best work as being saved as nested objects per state but for the purpose of using Sequelize in this exercise, each date would be associated with a specific state election throught the state id
  - dates with null values are not allowed to be stored in the db and will throw an error