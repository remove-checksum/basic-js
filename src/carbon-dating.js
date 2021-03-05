const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const isArgumentString = (typeof sampleActivity) === 'string';
  const isNumber = isNaN(parseFloat(sampleActivity));
  const isAdequate = parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) < 15
  if (!isArgumentString || !isAdequate || isNumber) return false;

  const constantForReaction = 0.693 / HALF_LIFE_PERIOD;
  const division = MODERN_ACTIVITY / parseFloat(sampleActivity);

  const time = Math.log(division) / constantForReaction;
  return Math.ceil(time);
};
