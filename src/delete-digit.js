const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  const numberToString = n.toString();
  for (let i = 0; i < numberToString.length; i++) {
    let firstPart = numberToString.slice(0, i);
    let secondPart = numberToString.slice(i + 1, numberToString.length);
    let concatTwoParts = firstPart + secondPart;
    concatTwoParts = concatTwoParts.trim();
    if (+concatTwoParts > max) {
      max = +concatTwoParts;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
