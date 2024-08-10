const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "*****": " ",
};

function decode(expr) {
  let morseCode = expr;

  // Splitting code into coded words and pushing to codedDigitalWordsArray array
  const codedDigitalWordsArray = [];
  for (let i = 0; i < morseCode.length; ) {
    let codedWord = morseCode.slice(0, 10);
    codedDigitalWordsArray.push(codedWord);
    morseCode = morseCode.slice(10, i.length);
  }

  // Splitting coded words into coded digits and pushing to codedSymbolsWordsArray array
  const codedSymbolsGlobalArray = [];
  for (let i = 0; i < codedDigitalWordsArray.length; i++) {
    // Splitting coded words into coded digits and pushing to codedLettersWordsArray array
    let codedLettersWordsArray = [];
    let first = codedDigitalWordsArray[i].slice(0, 2);
    let second = codedDigitalWordsArray[i].slice(2, 4);
    let third = codedDigitalWordsArray[i].slice(4, 6);
    let fourth = codedDigitalWordsArray[i].slice(6, 8);
    let fifth = codedDigitalWordsArray[i].slice(8, 10);
    codedLettersWordsArray.push(first, second, third, fourth, fifth);

    // Create arrays collection for each symbols
    let symbolsArray = [];
    for (let j = 0; j < codedLettersWordsArray.length; j++) {
      // Decoding coded digits into coded symbols
      if (codedLettersWordsArray[j] == "10") {
        symbolsArray.push(".");
      } else if (codedLettersWordsArray[j] == "11") {
        symbolsArray.push("-");
      } else if (codedLettersWordsArray[j] == "00") {
        continue;
      } else {
        symbolsArray.push("*");
      }
    }

    // Concatenate all coded symbols
    let joinedWords = symbolsArray.join("");
    // Push all coded symbols to one array
    codedSymbolsGlobalArray.push(joinedWords);
  }

  // Decoding symbols into letters and pushing to decodedLettersArray array
  let decodedLettersArray = [];
  for (let i = 0; i < codedSymbolsGlobalArray.length; i++) {
    for (let element in MORSE_TABLE) {
      if (element == codedSymbolsGlobalArray[i]) {
        decodedLettersArray.push(MORSE_TABLE[element]);
      }
    }
  }

  const decodedString = decodedLettersArray.join("");
  return decodedString;
}

module.exports = {
    decode
}