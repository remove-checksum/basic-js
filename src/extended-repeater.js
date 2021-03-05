module.exports = function repeater(str, { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' }) {
  const stringToRepeat = `${str}`;

  const tokens = [];
  const additionalTokens = [];

  for (let i = 0; i < repeatTimes; i++) {
    tokens.push(`${stringToRepeat}`);
  }

  for (let i = 0; i < additionRepeatTimes; i++) {
    additionalTokens.push(`${addition}`);
  }
  
  let additionalString = additionalTokens.join(`${additionSeparator}`);
  
  let resultString = tokens.map(token => `${token}${additionalString}`).join(`${separator}`);
  
  return resultString;
};
  