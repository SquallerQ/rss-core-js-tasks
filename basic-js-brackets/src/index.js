module.exports = function check(str, bracketsConfig) {
  if (Number(+str[0])) {
    if (bracketsConfig[0][0] != str[0]) {
      return false;
    }
    
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;

    for (let i = 0; i < str.length; i++) {
      // first pairs
      if (str[i] == "1") {
        count1++;
      }
      if (str[i] == "2") {
        count1--;
      }
      if (count1 < 0) {
        break;
      }
      // second pairs
      if (str[i] == "3") {
        count2++;
      }
      if (str[i] == "4") {
        count2--;
      }
      if (count2 < 0) {
        break;
      }
      // third pairs
      if (str[i] == "5") {
        count3++;
      }
      if (str[i] == "6") {
        count3--;
      }
      if (count3 < 0) {
        break;
      }
      // fourth pairs
      if (str[i] == "7") {
        count4++;
      }
      if (str[i] == "8") {
        count5++;
      }
    }

    if (
      count1 != 0 ||
      count2 != 0 ||
      count3 != 0 ||
      count4 % 2 != 0 ||
      count5 % 2 != 0
    ) {
      return false;
    } else {
      return true;
    }
  }

  if (
    str.length < 5 &&
    str.includes("(") &&
    str.includes(")") &&
    str.indexOf("(") + 1 !== str.indexOf(")")
  ) {
    return false;
  }
  // '(' ')'
  let count = 0;
  // '[' ']'
  let count2 = 0;
  // '{' '}'
  let count3 = 0;
  // '|'
  let count4 = 0;

  for (let i = 0; i < str.length; i++) {
    // first pairs
    if (str[i] == "(") {
      count++;
    }
    if (str[i] == ")") {
      count--;
    }
    if (count < 0) {
      break;
    }
    // second pairs
    if (str[i] == "[") {
      count2++;
    }
    if (str[i] == "]") {
      count2--;
    }
    if (count2 < 0) {
      break;
    }
    // third pairs
    if (str[i] == "{") {
      count3++;
    }
    if (str[i] == "}") {
      count3--;
    }
    if (count3 < 0) {
      break;
    }
    // fourth pairs
    if (str[i] == "|") {
      count4++;
    }
  }

  if (count != 0 || count2 != 0 || count3 != 0 || count4 % 2 != 0) {
    return false;
  } else {
    return true;
  }
};
