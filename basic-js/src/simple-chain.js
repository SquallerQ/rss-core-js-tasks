const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {
  array: [],

  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(value);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position < 1 ||
      position > this.array.length ||
      position !== Math.floor(position)
    ) {
      this.array = [];
      throw new Error("You can't remove incorrect link!");
    }
    const firstPart = this.array.slice(0, position - 1);
    const secondPart = this.array.slice(position, this.array.length);
    this.array = [...firstPart, ...secondPart];
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let result = "";
    for (let i = 0; i < this.array.length; i++) {
      if (i < this.array.length - 1) {
        result = result + `( ${this.array[i]} )~~`;
      } else {
        result = result + `( ${this.array[i]} )`;
      }
    }
    this.array = [];
    return result;
  },
};

module.exports = {
  chainMaker
};
