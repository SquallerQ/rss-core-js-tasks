module.exports = function reverse (n) {
  const modulusNumber = Math.abs(n)
  const array = modulusNumber.toString().split("");
  const reverseArray = array.reverse();
  const arrayToString = reverseArray.join('');
  return +arrayToString;
}
