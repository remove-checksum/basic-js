const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (arguments.length === 0) {
      this.chain.push('__blank__');
    } else {
      this.chain.push(`${value}`);
    }
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number'
        || !Number.isInteger(position)
        || !this.chain[position - 1]) {
      this.chain = [];
      throw new Error('no such link');
    } else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.map(m => m === '__blank__' ? `( )` : `( ${m} )`).join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
