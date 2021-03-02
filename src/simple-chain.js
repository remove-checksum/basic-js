const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`${value}`);
    return this;
  },
  removeLink(position) {
    if (!this.chain[position - 1]) throw new Error('no such link');
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.map(m => `( ${m} )`).join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
