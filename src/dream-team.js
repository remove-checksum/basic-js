const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  return members
    .filter(m => typeof m === 'string') // filter non-strings
    .map(n => n.trim()[0].toUpperCase()) // trim whitespace and map to an array of upper-cased first letters
    .sort(new Intl.Collator('en').compare) // sort alphabetically
    .join('');
};
