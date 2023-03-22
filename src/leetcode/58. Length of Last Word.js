// 내 풀이: Runtime 91 ms Beats 18.50% | Memory 44.2 MB Beats 5.11%
var lengthOfLastWord = function (s) {
  // return s.trim().split('')[s.length - 1].length;
  const trimS = s.trim();
  const result = [];
  let word = '';

  for (let i = 0; i < trimS.length; i++) {
    if (trimS[i] === ' ') {
      result.push(word);
      word = '';
      continue;
    }

    word += trimS[i];
    if (i === trimS.length - 1) result.push(word);
  }

  return result[result.length - 1].length;
};

// 메소드 최소 이용: Runtime 53 ms Beats 96.99% | Memory 41.9 MB Beats 71.73%
var lengthOfLastWord = function (s) {
  const arr = s.trim().split(' ');
  return arr[arr.length - 1].length;
};

// reverse 이용 풀이: Runtime 70 ms Beats 46.12% | Memory 41.8 MB Beats 80.97%
var lengthOfLastWord = function (s) {
  return s.trim().split(' ').reverse()[0].length;
};
