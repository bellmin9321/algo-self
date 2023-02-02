function solution(n, words) {
  let index;

  for (let i = 0; i < words.length; i++) {
    if (i !== 0 && words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
      index = i + 1;
      return [index % n === 0 ? n : index % n, Math.ceil(index / n)];
    }

    for (let j = i - 1; j >= 0; j--) {
      if (words[i] === words[j]) {
        index = i + 1;
        return [index % n === 0 ? n : index % n, Math.ceil(index / n)];
      }
    }
  }

  return [0, 0];
}
