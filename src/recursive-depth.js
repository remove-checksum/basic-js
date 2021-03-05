module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      return arr.length ? 1 + Math.max(...arr.map((child) => this.calculateDepth(child))) : 1; // if child array not empty, call calculateDepth with every element of child and return maximal (in case of multiple nested arrays on the same level)
    } else {
      return 0;
    }
  }
};
