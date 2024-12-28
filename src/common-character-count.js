const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const firstArray = s1.split("").sort();
  const secondArray = s2.split("").sort();

  let i = 0;
  let j = 0;

  while (i < firstArray.length && j < secondArray.length) {
    if (firstArray[i] === secondArray[j]) {
      count++;
      i++;
      j++;
    } else if (firstArray[i] > secondArray[j]) {
      j++;
    } else {
      i++;
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
