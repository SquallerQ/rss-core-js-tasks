const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const arrayWithTwoSymbols = n.toString().split("-");
  let result = true;

  if (arrayWithTwoSymbols.length !== 6) {
    result = false;
  }
  arrayWithTwoSymbols.forEach((item) => {
    if (item.length !== 2) {
      result = false;
      return;
    }
    const firstSymbol =
      (item[0] >= "0" && item[0] <= "9") ||
      (item[0] >= "A" && item[0] <= "F") ||
      (item[0] >= "a" && item[0] <= "f");
    const secondSymbol =
      (item[1] >= "0" && item[1] <= "9") ||
      (item[1] >= "A" && item[1] <= "F") ||
      (item[1] >= "a" && item[1] <= "f");

    if (firstSymbol === false || secondSymbol === false) {
      result = false;
    }
  });

  return result;
}
module.exports = {
  isMAC48Address
};
