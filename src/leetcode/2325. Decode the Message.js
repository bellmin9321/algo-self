// my solution
var decodeMessage = function (key, message) {
  const clean = key.trim().replaceAll(' ', '');
  const unique = [...new Set(clean)];
  const hash = {};

  for (let i = 0; i < unique.length; i++) {
    hash[unique[i]] = i + 97;
  }

  let decode = '';

  for (let i = 0; i < message.length; i++) {
    if (message[i] === ' ') {
      decode += ' ';
    } else {
      decode += String.fromCharCode(hash[message[i]]);
    }
  }

  return decode;
};

// best
var decodeMessage = function (key, message) {
  let result = '';
  key = Array.from(new Set(key.split(' ').join('')));
  const hash = new Map();
  const alpha = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < alpha.length; i++) {
    hash.set(key[i], alpha[i]);
  }

  for (let chr of message) {
    result += hash.get(chr) || ' ';
  }

  return result;
};

// 2nd
var decodeMessage = function (key, message) {
  let uniqueLetters = Array.from(new Set(key.split(' ').join('')));
  let letterMap = new Map();
  let result = message.split('');

  for (let i = 0; i < uniqueLetters.length; i++) {
    letterMap.set(uniqueLetters[i], String.fromCharCode(97 + i));
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] !== ' ') {
      result[i] = letterMap.get(result[i]);
    }
  }

  return result.join('');
};
