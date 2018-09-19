Skimm No Excuses Exercise

Assumptions:
  - focus is on the dates per state
  - any other type of territory defined as anything other than a state is not relevant
  - an preserving other state election info other than states may be required for other use cases 
  - there are only a handful of common date_kinds 
  - the dates information would best work as nested objects per state but for the purpose of using Sequelize in this exercise, each date would be associated with a specific state election
  - dates with null values are allowed to be stored in the db