// 참고 사이트: https://jjnooys.medium.com/javascript-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%8B%A8%EC%96%B4-%EB%B3%80%ED%99%98-dfs-bfs-18d29a699800
// ❌ NotSolved
function solution(begin, target, words) {
  if (!words.includes(target)) return 0;
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (new Set(begin + words[i]).size === 4) {
      begin = words[i];
      count++;
    } else continue;

    if (new Set(begin + target).size === 4) return ++count;
  }

  return count;
}

// best
function solution(begin, target, words) {
  const queue = [begin];
  const visitArr = new Array(words.length).fill(false);
  let ans = 0;
  let shiftedWord = begin;
  let queueLeng = 1;

  while (queue.length > 0) {
    shiftedWord = queue.shift();
    queueLeng--;

    for (let i in words) {
      if (check(shiftedWord, words[i])) {
        if (visitArr[i] == true) continue;

        if (words[i] == target) return ans + 1;

        visitArr[i] = true;
        queue.push(words[i]);
      }
    }

    if (queueLeng == 0) {
      ans++;
      queueLeng = queue.length;
    }
  }

  return 0;

  function check(standard, word) {
    let diffans = 0;

    // begin과 words의 단어 길이가 다르면 false
    if (standard.length != word.length) return false;

    for (let i = 0; i < standard.length; i++) {
      if (standard.charAt(i) != word.charAt(i)) diffans++;
      // 알파벳이 2개 이상 다르면 false
      if (diffans > 1) return false;
    }
    return true;
  }
}

// 2nd
const diffOne = function (wordFirst, wordSecond) {
  let count = 0;

  for (let i = 0; i < wordFirst.length; i++) {
    if (wordFirst[i] !== wordSecond[i]) {
      count += 1;
      if (count >= 2) return false;
    }
  }

  return true;
};

const solution = function (begin, target, words) {
  if (!words.includes(target)) return 0;

  let arr = [[begin, 0]];

  while (arr) {
    let [begin, c] = arr.shift();

    for (const word of words) {
      if (diffOne(begin, word)) {
        if (begin === target) return c;
        else arr.push([word, c + 1]);
      }
    }
  }
};
