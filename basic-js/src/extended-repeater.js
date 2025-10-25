const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (str === null) {
    str = 'null'
  }
  if (typeof str === 'boolean') {
    str = str.toString()
  }
  let repeatTimes = options.repeatTimes || 1;
  let addition = options.addition !== undefined ? options.addition : "";
  let separator = options.separator || "+";
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || "|";

  const a = str + addition;
  const b = (additionSeparator + addition).repeat(additionRepeatTimes - 1);
  const c = a + b;

  let result;
  if (separator.length > 0) {
    result = (c + separator).repeat(repeatTimes);
    result = result.slice(0, -separator.length);
  } else if (separator.length === 0) {
    result = c.repeat(repeatTimes);
  }
  return result; 
}

module.exports = {
  repeater
};
