import * as R from 'ramda';

export const formatLocationName = R.pipe(
  R.prop('state'),
  R.defaultTo('No State Name Found'),
  R.prop('name')
);

export const formatLocationNameAbbrev = R.pipe(
  R.prop('state'),
  R.defaultTo('NA'),
  R.prop('short_name')
);

export const formatLocationType = R.pipe(
  R.prop('locations'),
  R.defaultTo([]),
  R.map(
    R.prop('type')
  )
);

export const formatElectionType = R.pipe(
  R.prop('election_type'),
  R.defaultTo({}),
  R.prop('name')
);

export const formatElectionTypeDetail = R.pipe(
  R.prop('election_type'),
  R.defaultTo({}),
  R.prop('name')
);


export const formatUrls = R.pipe(
  R.prop('urls'),
  R.defaultTo([]),
  R.map(
    R.prop('url')
  )
);

export const formatElections = R.pipe(
  R.prop('objects'),
  R.defaultTo([]),
  R.map(
    R.applySpec({
      locationName: formatLocationName,
      locationNameAbbrev: formatLocationNameAbbrev,
      locationType: formatLocationType,
      electionType: formatElectionType,
      electionTypeDetail: formatElectionTypeDetail,
      electionDate: R.prop('election_date'),
      electionDayRegistrationAvail: R.prop('election_day_registration_is_available'),
      additionalInfo: R.prop('additional_information'),
      url: formatUrls
    })
  )
);

export const formatDates = R.pipe(
  R.path(['objects, dates']),
  R.defaultTo([]),
  R.map(
    R.applySpec({
      type: R.prop('kind'),
      dateTypeId: R.path(['date_type', 'id']),
      additionalInfo: R.path(['date_type', 'name']),
      shortDate: R.prop('date'),
      longDate: R.prop('date_human_readable')
    })
  )
);

