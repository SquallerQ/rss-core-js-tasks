/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) {
    return true;
  }
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let maxNumber = 0;
  if (a > b && a > c) {
    maxNumber = a;
  } else if (b > a && b > c) {
    maxNumber = b;
  } else {
    maxNumber = c;
  }
  return maxNumber;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x) {
    return true;
  }
  if (queen.y === king.y) {
    return true;
  }
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  }
  let sumOfTwoSides = 0;
  let thirdSide = 0;
  if (a === b) {
    sumOfTwoSides = a + b;
    thirdSide = c;
  } else if (a === c) {
    sumOfTwoSides = a + c;
    thirdSide = b;
  } else if (b === c) {
    sumOfTwoSides = b + c;
    thirdSide = a;
  } else {
    return false;
  }
  if (sumOfTwoSides < thirdSide) {
    return false;
  }
  return true;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let resultNumber = '';
  const object = {
    1: 'I',
    5: 'V',
    10: 'X',
  };

  let remaining = num;

  while (remaining >= 10) {
    resultNumber += object[10];
    remaining -= 10;
  }

  if (remaining < 4) {
    for (let i = 0; i < remaining; i += 1) {
      resultNumber += object[1];
    }
  } else if (remaining === 4) {
    resultNumber += object[1] + object[5];
  } else if (remaining >= 5 && remaining < 9) {
    resultNumber += object[5];
    for (let i = 0; i < remaining - 5; i += 1) {
      resultNumber += object[1];
    }
  } else if (remaining === 9) {
    resultNumber += object[1] + object[10];
  }

  return resultNumber;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    const symbol = numberStr[i];
    let word = '';

    switch (symbol) {
      case '0':
        word = 'zero';
        break;
      case '1':
        word = 'one';
        break;
      case '2':
        word = 'two';
        break;
      case '3':
        word = 'three';
        break;
      case '4':
        word = 'four';
        break;
      case '5':
        word = 'five';
        break;
      case '6':
        word = 'six';
        break;
      case '7':
        word = 'seven';
        break;
      case '8':
        word = 'eight';
        break;
      case '9':
        word = 'nine';
        break;
      case '-':
        word = 'minus';
        break;
      case '.':
        word = 'point';
        break;
      case ',':
        word = 'point';
        break;
      default:
    }
    if (i === numberStr.length - 1) {
      result += word;
    } else {
      result += `${word} `;
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let firstPart = '';
  let secondPart = '';

  if (str.length % 2 !== 0) {
    for (let i = 0; i < str.length / 2 - 1; i += 1) {
      firstPart += str[i];
    }
    for (let i = str.length - 1; i > str.length / 2; i -= 1) {
      secondPart += str[i];
    }
  } else {
    for (let i = 0; i < str.length / 2; i += 1) {
      firstPart += str[i];
    }
    for (let i = str.length - 1; i > str.length / 2 - 1; i -= 1) {
      secondPart += str[i];
    }
  }
  if (firstPart === secondPart) {
    return true;
  }
  return false;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let resultIndex = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      resultIndex = i;
    }
  }

  return resultIndex;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let result = false;

  let numToString = '';
  let digitToString = '';

  for (let i = 0; i < 1; i += 1) {
    numToString += num;
    digitToString += digit;
  }

  for (let i = 0; i < numToString.length; i += 1) {
    if (numToString[i] === digitToString) {
      result = true;
    }
  }

  return result;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length < 3) {
    return -1;
  }
  let result = -1;
  let sumLeft = 0;
  const arrayForLeftSums = [];
  for (let i = 0; i < arr.length; i += 1) {
    arrayForLeftSums[i] = sumLeft;
    sumLeft += arr[i];
  }

  let sumRight = 0;
  const arrayForRightSums = [];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    arrayForRightSums[i] = sumRight;
    sumRight += arr[i];
  }

  for (let i = 0; i < arr.length; i += 1) {
    if (arrayForLeftSums[i] === arrayForRightSums[i]) {
      result = i;
    }
  }

  return result;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = 0;
    }
  }
  function createSpiralMatrix(start, end, current) {
    if (start > end) {
      return current;
    }

    let currentNumber = current;

    for (let i = start; i <= end; i += 1) {
      matrix[start][i] = currentNumber;
      currentNumber += 1;
    }
    for (let i = start + 1; i <= end; i += 1) {
      matrix[i][end] = currentNumber;
      currentNumber += 1;
    }
    for (let i = end - 1; i >= start; i -= 1) {
      matrix[end][i] = currentNumber;
      currentNumber += 1;
    }
    for (let i = end - 1; i > start; i -= 1) {
      matrix[i][start] = currentNumber;
      currentNumber += 1;
    }

    return createSpiralMatrix(start + 1, end - 1, currentNumber);
  }

  createSpiralMatrix(0, size - 1, 1);

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const matrix1 = matrix;
  const n = matrix.length;

  const flattenedMatrix = new Array(n * n);
  let index = 0;
  for (let col = 0; col < n; col += 1) {
    for (let row = n - 1; row >= 0; row -= 1) {
      flattenedMatrix[index] = matrix[row][col];
      index += 1;
    }
  }

  let rowIndex = 0;
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      matrix1[i][j] = flattenedMatrix[rowIndex];
      rowIndex += 1;
    }
  }

  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const arr1 = arr;
  if (arr1.length <= 1) {
    return arr1;
  }
  const middleElement = arr[0];
  const leftPart = [];
  const rightPart = [];

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < middleElement) {
      leftPart[leftPart.length] = arr[i];
    } else {
      rightPart[rightPart.length] = arr[i];
    }
  }
  const sortedLeft = sortByAsc(leftPart);
  const sortedRight = sortByAsc(rightPart);

  const newArray = [...sortedLeft, middleElement, ...sortedRight];
  for (let i = 0; i < arr1.length; i += 1) {
    arr1[i] = newArray[i];
  }
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const original = str;
  let copyStr = str;
  let cycleLength = 0;

  function oneShuffle(input) {
    let evenChars = '';
    let oddChars = '';

    for (let i = 0; i < input.length; i += 1) {
      if (i % 2 === 0) {
        evenChars += input[i];
      } else {
        oddChars += input[i];
      }
    }
    return evenChars + oddChars;
  }

  const maxShuffles = 50;
  while (cycleLength < maxShuffles) {
    copyStr = oneShuffle(copyStr);
    cycleLength += 1;
    if (copyStr === original) {
      break;
    }
  }
  const optimizedIterations = iterations % cycleLength;
  for (let i = 0; i < optimizedIterations; i += 1) {
    copyStr = oneShuffle(copyStr);
  }

  return copyStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const digits = [];
  let remainingNumber = number;

  while (remainingNumber > 0) {
    digits.unshift(remainingNumber % 10);
    remainingNumber = Math.floor(remainingNumber / 10);
  }

  let swapIndex = -1;
  for (let i = digits.length - 2; i >= 0; i -= 1) {
    if (digits[i] < digits[i + 1]) {
      swapIndex = i;
      break;
    }
  }

  if (swapIndex === -1) return number;

  let smallestLargerDigitIndex = swapIndex + 1;
  for (let j = swapIndex + 1; j < digits.length; j += 1) {
    if (
      digits[j] > digits[swapIndex] &&
      digits[j] < digits[smallestLargerDigitIndex]
    ) {
      smallestLargerDigitIndex = j;
    }
  }

  const swapValue = digits[swapIndex];
  digits[swapIndex] = digits[smallestLargerDigitIndex];
  digits[smallestLargerDigitIndex] = swapValue;

  const rightPart = [];
  for (let i = swapIndex + 1; i < digits.length; i += 1) {
    rightPart.push(digits[i]);
  }

  rightPart.sort((a, b) => a - b);

  const finalDigits = [];
  for (let i = 0; i <= swapIndex; i += 1) {
    finalDigits.push(digits[i]);
  }
  for (let i = 0; i < rightPart.length; i += 1) {
    finalDigits.push(rightPart[i]);
  }

  let result = 0;
  for (let i = 0; i < finalDigits.length; i += 1) {
    result = result * 10 + finalDigits[i];
  }

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
