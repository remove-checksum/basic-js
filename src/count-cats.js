module.exports = function countCats(matrix) {
  let counter = 0;
  for (const row of matrix) {
    for (const el of row) {
      if (el === '^^') counter++;
    }
  }
  return counter;
};
