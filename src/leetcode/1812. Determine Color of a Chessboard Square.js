// my solution
var squareIsWhite = function (coordinates) {
  const alphabet = 'abcdefgh';
  // 짝수 번째 알파벳과 홀수가 만나면 false | 홀수 번째 알파벳과 짝수가 만나면 false 나머진 true;
  const aIndex = alphabet.indexOf(coordinates[0]) + 1;
  if (aIndex % 2 !== 0 && +coordinates[1] % 2 !== 0) return false;
  else if (aIndex % 2 !== 0 && +coordinates[1] % 2 === 0) return true;
  else if (aIndex % 2 === 0 && +coordinates[1] % 2 !== 0) return true;
  else if (aIndex % 2 === 0 && +coordinates[1] % 2 === 0) return false;
};

// my solution2
var squareIsWhite = function (coordinates) {
  const alphabet = 'abcdefgh';
  const aIndex = alphabet.indexOf(coordinates[0]) + 1;
  return aIndex % 2 !== coordinates[1] % 2;
};

// best
const squareIsWhite = coordinates => {
  return coordinates[0].charCodeAt(0) % 2 !== parseInt(coordinates[1]) % 2;
};
