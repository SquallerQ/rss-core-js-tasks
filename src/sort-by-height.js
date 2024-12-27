const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const mainArrayCopy = arr.map((item) => item);

  const sortedArray = arr.sort((a, b) => a - b);
  const filteredArray = sortedArray.filter((item) => item !== -1);

  let index = 0;
  for (let i = 0; i < mainArrayCopy.length; i++) {
    if (mainArrayCopy[i] !== -1) {
      mainArrayCopy[i] = filteredArray[index];
      index++;
    }
  }
  return mainArrayCopy; 
}

module.exports = {
  sortByHeight
};
