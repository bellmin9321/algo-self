function solution(s) {
  // return s.split(' ').map((v, i) => [...v].map((w, j) => j % 2 === 0 ? w.toUpperCase() : w.toLowerCase()).join('')).join(' ');
  const arr = s.split(' ');
  const result = [];
  let word = '';

  for (str of arr) {
    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
        word += str[i].toUpperCase();
      } else {
        word += str[i].toLowerCase();
      }
    }

    result.push(word);
    word = '';
  }

  return result.join(' ');
}
