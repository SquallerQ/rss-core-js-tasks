module.exports = function toReadable(number) {
  let objFirst = {
    0: 'zero',
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };
  let objSecond = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety",
  };
  let objThird = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  }
  let objFourth = {
      10: "ten",
      20: "twenty",
      30: "thirty",
      40: "forty",
      50: "fifty",
      60: "sixty",
      70: "seventy",
      80: "eighty",
      90: "ninety",
  };

  let symbol
  let firstSymbol;
  let secondSymbol;

  numberLength = number.toString().length;

  // For numbers < 10
  if (numberLength == 1) {
   let numberSearch = number.toString()
   for (const key in objFirst) {
     if (numberSearch === key) {
       symbol = objFirst[key];
     }
   }
   return symbol
  }
  
  // For numbers > 10 < 20
  if (numberLength == 2 && number < 20) {
    let numberSearch = number.toString();
    console.log(numberSearch);
    for (const key in objThird) {
      if (numberSearch === key) {
        symbol = objThird[key];
      }
    }
    return symbol;
  }

  // For numbers > 20 and ending in 0
  if ((numberLength == 2) && (number >= 20) && (number.toString()[1] == 0)) {
      let numberSearch = number.toString();
      console.log(numberSearch);
      for (const key in objFourth) {
          if (numberSearch === key) {
              symbol = objFourth[key];
          }
      }
      return symbol;
  }

  // For numbers > 20 < 100 and ending not in 0
  if ((numberLength > 1) && (numberLength < 3) && (number.toString()[1] != 0) && (number > 20)) {
    let first = number.toString()[0];
    for (const key in objSecond) {
      if (first === key) {
        firstSymbol = objSecond[key];
      }
    }
    let second = number.toString()[1];
    for (const key in objFirst) {
      if (second === key) {
        secondSymbol = objFirst[key];
      }
    }
    return `${firstSymbol} ${secondSymbol}`;
  }

  // For numbers > 100 and second digit not 0 and third digit not 0 and second digit >= 2
  if ((numberLength > 2) && (number.toString()[1]!= 0) && (number.toString()[2]!= 0) && (number.toString()[1] >= 2 )) {
      let first = number.toString()[0];
      for (const key in objFirst) {
          if (first === key) {
              firstSymbol = objFirst[key];
          }
      }
      let second = number.toString()[1];
      for (const key in objSecond) {
          if (second === key) {
              secondSymbol = objSecond[key];
          }
      }
      let third = number.toString()[2];
      for (const key in objFirst) {
          if (third === key) {
              thirdSymbol = objFirst[key];
          }
      }
      return `${firstSymbol} hundred ${secondSymbol} ${thirdSymbol}`;
  }

  // For numbers > 100 and second digit 0, third digit not 0 
  if ((numberLength > 2) && (number.toString()[1] == 0) && (number.toString()[2]!= 0))  {
    let first = number.toString()[0];
    for (const key in objFirst) {
        if (first === key) {
            firstSymbol = objFirst[key];
        }
    }
    let third = number.toString()[2];
    for (const key in objFirst) {
        if (third === key) {
            thirdSymbol = objFirst[key];
        }
    }
    return `${firstSymbol} hundred ${thirdSymbol}`;
  }

  // For numbers > 100 and second digit not 0 and third digit not 0 and second digit < 2
  if ((numberLength > 2) && (number.toString()[1]!= 0) && (number.toString()[2]!= 0) && (number.toString()[1] < 2 ))  {
      let first = number.toString()[0];
      for (const key in objFirst) {
          if (first === key) {
              firstSymbol = objFirst[key];
          }
      }
      let second = number.toString()[1] + number.toString()[2];
      for (const key in objThird) {
          if (second === key) {
              secondSymbol = objThird[key];
          }
      }

      return `${firstSymbol} hundred ${secondSymbol}`;
  }

  // For numbers > 100 and second digit not 0 and third digit 0 
  if ((numberLength > 2) && (number.toString()[1]!= 0) && (number.toString()[2] == 0))  {
    let first = number.toString()[0];
    for (const key in objFirst) {
        if (first === key) {
            firstSymbol = objFirst[key];
        }
    }
    let second = number.toString()[1] + number.toString()[2];
    for (const key in objFourth) {
        if (second === key) {
            secondSymbol = objFourth[key];
            console.log(secondSymbol);
        }
    }

    return `${firstSymbol} hundred ${secondSymbol}`;
  }

  // For numbers > 100, second digit 0 and third digit 0 
  if ((numberLength > 2) && (number.toString()[1] == 0) && (number.toString()[2] == 0))  {
    let first = number.toString()[0];
    for (const key in objFirst) {
        if (first === key) {
            firstSymbol = objFirst[key];
        }
    }
    return `${firstSymbol} hundred`;
  }
};

