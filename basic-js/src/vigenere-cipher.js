const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(value = true) {
    this.value = value;
  }
  validateValue(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
  }
  modifyKey(message, key) {
    const keyToUpperCase = key.toUpperCase()
    let modifiedKey = '';
    let indexForModify = 0;

    for (const char of message) {
      if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
        modifiedKey = modifiedKey + keyToUpperCase[indexForModify % keyToUpperCase.length];
        indexForModify++;
      } else {
        modifiedKey = modifiedKey + char;
      }
    }   
    return modifiedKey;
  }
  encrypt(message, key) {
    this.validateValue(message, key)

    const messageToUpperCase = message.toUpperCase();
    const modifiedKey = this.modifyKey(messageToUpperCase, key);
    let result = '';
    
    for (let i = 0; i < messageToUpperCase.length; i++) {
      const charMessage = messageToUpperCase[i];
      const charKey = modifiedKey[i]
      if (charMessage >= "A" && charMessage <= 'Z') {
         const encryptedChar = String.fromCharCode(
          ((charMessage.charCodeAt(0) - 65 + (charKey.charCodeAt(0) - 65)) % 26) + 65
        );
        result = result + encryptedChar;
      } else {
        result = result + charMessage;
      }
    } 

   if (this.value === true) {
     return result;
    } else {
    return result.split('').reverse().join('');
   }
  }


  
  decrypt(message, key) {
    this.validateValue(message, key);

    const messageToUpperCase = message.toUpperCase();
    const modifiedKey = this.modifyKey(messageToUpperCase, key);
    let result = '';

    for (let i = 0; i < messageToUpperCase.length; i++) {
      const charMessage = messageToUpperCase[i];
      const charKey = modifiedKey[i];
      if (charMessage >= 'A' && charMessage <= 'Z') {
        const decryptedChar = String.fromCharCode(
          ((charMessage.charCodeAt(0) - 65 - (charKey.charCodeAt(0) - 65) + 26) % 26) + 65
        );
        result = result + decryptedChar;
      } else {
        result = result + charMessage;
      }
    }
    if (this.value === true) {
      return result;      
    } else {
      return result.split('').reverse().join('')
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
