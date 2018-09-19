export const isValidState = ({ locations }) => {
  locations.find(location => {
    return location.name !== 'state';
  })
};

export const parseDate = (date_human_readable_str) => {
  const dateArr= date_human_readable_str.split(" ");
  const updatedDate = dateArr.splice(dateArr.length - 2, 2).join(" ");

  return updatedDate;
};