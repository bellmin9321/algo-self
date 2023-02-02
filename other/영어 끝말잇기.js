function solution(n, words) {
  let answer = 0;
  words.reduce((prev, now, idx) => {
    answer =
      answer ||
      (words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]
        ? idx
        : answer);
    return now[now.length - 1];
  }, '');

  return answer ? [(answer % n) + 1, Math.floor(answer / n) + 1] : [0, 0];
}

function solution(n, words) {
  var fail_i = -1;
  for (var i = 1; i < words.length; i++) {
    var val = words[i];
    // 전단계의 끝말과 현단계 첫말이 다를 경우
    if (
      words[i - 1].substring(words[i - 1].length - 1) != val.substring(0, 1)
    ) {
      fail_i = i;
      break;
    }
    // indexOf 함수는 첫번째로 값이 맞는 인덱스만 반환하므로
    // 현재 인덱스와 맞지 않을 경우 중복된 값
    if (words.indexOf(val) != i) {
      fail_i = i;
      break;
    }
  }

  if (fail_i == -1) return [0, 0];

  var no = (fail_i % n) + 1;
  var turn = Math.floor(fail_i / n) + 1;

  return [no, turn];
}

// Set 을 이용한 풀이
function solution(n, words) {
  let set = new Set();
  set.add(words[0]);

  for (let i = 1; i < words.length; i++) {
    if (set.has(words[i])) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    } else {
      set.add(words[i]);
    }
    if (words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
  }
  return [0, 0];
}
