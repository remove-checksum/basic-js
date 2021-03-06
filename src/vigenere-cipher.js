let getKeyStream = (message, key) => {
  let msg = message.split('').map(char => char.toUpperCase().replace(/[^A-Z]/g, '')).join('');
  let keyFragment = key.split('').map(char => char.toUpperCase().replace(/[^A-Z]/g, '')).join('');
  
  let diff = msg.length - keyFragment.length;
  
  if (diff > 0) {
    return keyFragment.padEnd(msg.length, keyFragment); // if key is shorter, pad with itself
  } else if (diff < 0) {
    return keyFragment.slice(0, msg.length); // if longer, slice to length
  } else {
    return keyFragment;
  }
};

function encryptChar(msgChar, keyChar) { // ONLY UPPERCASE
  let charPosition = msgChar.charCodeAt(0) - 65;
  let keyPosition = keyChar.charCodeAt(0) - 65;
  let encodedPosition = (charPosition + keyPosition) % 26;
  return String.fromCharCode(encodedPosition + 65);
}

function encryptString(string, mask) { // ONLY UPPERCASE
  let result = [];
  for (let idx = 0, mIdx = 0; idx < string.length; idx++) {
    const char = string[idx];
    if (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91) {
      result.push(encryptChar(char, mask[mIdx]));
      mIdx++;
    } else {
      result.push(char);
    }
  }
  
  return result.join('');
}

function decryptChar(encChar, keyChar) { // ONLY UPPERCASE
  let charPosition = encChar.charCodeAt(0) - 65;
  let keyPosition = keyChar.charCodeAt(0) - 65;
  let decodedPosition = (charPosition + 26 - keyPosition) % 26;
  return String.fromCharCode(decodedPosition + 65);
}

function decryptString(string, mask) {
  let result = [];
  for (let idx = 0, mIdx = 0; idx < string.length; idx++) {
    const char = string[idx];
    if (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91) {
      result.push(decryptChar(char, mask[mIdx]));
      mIdx++;
    } else {
      result.push(char);
    }
  }
  
  return result.join('');
}


class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('invalid parameter');
    message = message.toUpperCase();

    let keyStream = getKeyStream(message, key);
    let result = encryptString(message, keyStream);

    if (!this.mode) {
      result = result.split('').reverse().join(''); // set mode
    }

    return result;
  }
  
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) throw new Error('invalid parameter');
    encryptedMessage = encryptedMessage.toUpperCase();

    let keyStream = getKeyStream(encryptedMessage, key);
    let result = decryptString(encryptedMessage, keyStream);

    if (!this.mode) {
      result = result.split('').reverse().join(''); // set mode
    }

    return result;
  }
}

module.exports = VigenereCipheringMachine;
