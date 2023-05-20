// 2번째 풀이: ⭕️ Solved(40min) 23.05.14
function solution(progresses, speeds) {
  const rest = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));
  const ans = [];

  for (let i = 0; i < rest.length; i++) {
    const biggerIdx = rest.findIndex(v => rest[i] < v);
    if (biggerIdx < 0) {
      // 이후에 더 이상 큰 값이 없을 때 나머지 요소 개수 카운트
      ans.push(rest.length - i);
      break;
    }
    ans.push(biggerIdx - i);
    i = biggerIdx - 1;
  }

  return ans;
}

// 첫번째 풀이: 배열 메서드와 이중 for문 사용
function solution(progresses, speeds) {
  // 100 - 진행률 = 남은 비율 -> 이 값을 speed로 나누면 걸리는 일 수이지만 나머지가 있으면 하루 더 해야하므로 Math.ceil로 +1된 값을 반환
  const rests = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i]),
  );
  let result = [];

  for (let i = 0; i < rests.length; i++) {
    let count = 0;
    for (let j = i; j < rests.length; j++) {
      if (rests[i] >= rests[j]) {
        count++;
      } else {
        break;
      }
    }

    i += count - 1;
    count > 0 ? result.push(count) : null;
  }

  return result;
}

// 1위 풀이: 내 풀이랑 비슷하지만 for문 한 개로 해결
function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index]),
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}

// 2위 풀이
function solution(progresses, speeds) {
  var answer = [];

  while (speeds.length > 0) {
    // 개발
    for (let i in speeds) {
      if (progresses[i] < 100) {
        progresses[i] += speeds[i];
      }
    }

    // 배포
    let deploy_count = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      deploy_count++;
    }
    if (deploy_count > 0) {
      answer.push(deploy_count);
    }
  }

  return answer;
}
