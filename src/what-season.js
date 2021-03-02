module.exports = function getSeason(date) {
  if (arguments.length === 0) return 'Unable to determine the time of year!';
  if (date.hasOwnProperty('toString')) throw new Error('haha gotcha');

  const month = date.getMonth();

  if (month < 2) {
    return 'winter';
  } else if (month < 5) {
    return 'spring';
  } else if (month < 8) {
    return 'summer';
  } else if (month < 11) {
    return 'autumn';
  } else {
    return 'winter';
  }
};
