const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('argument provided not an array');

  let result = [];

  for (let idx = 0; idx < arr.length; idx++) {
    switch (arr[idx]) {
      case '--discard-next':
        if (idx < (arr.length - 1)) idx++;
        break;

      case '--discard-prev':
        if (idx > 0 && (arr[idx - 2] !== '--discard-next')) result.pop(); // ??? > [--discard-prev] AND [ not(--discard-next) > VAL > --discard-prev ]
        break;

      case '--double-next':
        if (idx < (arr.length - 1)) result.push(arr[idx + 1]); // [--double-next] > ???
        break;

      case '--double-prev':
        if (idx > 0 && (arr[idx - 2] !== '--discard-next')) result.push(arr[idx - 1]); // ??? > [--double-prev] AND [ not(--discard-next) > VAL > --double-prev ]
        break;
        
      default:
        result.push(arr[idx]);
        break;
    }
  }
  return result;
};