function solution(k, score) {
  const ans = [];
  const temp = [];

  for (let i = 0; i < score.length; i++) {
    if (temp.length === k) {
      if (Math.min(...temp) < score[i]) {
        temp.push(score[i]);
        temp.sort((a, b) => a - b).shift();
      }
    } else {
      temp.push(score[i]);
    }

    ans.push(Math.min(...temp));
  }

  return ans;
}

// best
function solution(k, score) {
  const stack = [];

  return score.reduce((a, c) => {
    if (stack.length < k) {
      stack.push(c);
      stack.sort((a, b) => a - b);
    } else {
      stack.push(c);
      stack.sort((a, b) => a - b);
      stack.shift();
    }
    a.push(stack[0]);
    return a;
  }, []);
}

// 2nd
function solution(k, score) {
  const answer = [];
  const announced_score = [];

  for (let i = 0; i < score.length; i++) {
    announced_score.push(score[i]);
    announced_score.sort((a, b) => b - a);

    if (announced_score.length >= k) answer.push(announced_score[k - 1]);
    else answer.push(announced_score[announced_score.length - 1]);
  }

  return answer;
}

// 3rd
function solution(k, score) {
  var temp = [];
  let answer = [];

  score.forEach(el => {
    temp.push(el);
    temp.sort((a, b) => b - a);
    if (k < temp.length) answer.push(temp[k - 1]);
    else answer.push(temp[temp.length - 1]);
  });
  return answer;
}

// 4th
function solution(k, score) {
  var answer = [];

  return score.reduce((acc, cur) => {
    answer.push(cur);
    answer = answer.sort((a, b) => b - a).slice(0, k);
    return [...acc, Math.min(...answer)];
  }, []);
}
