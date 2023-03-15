// my solution
function solution(n, t, m, p) {
  let ans = '';
  let nums = '';

  for (let i = 0; i < t * m; i++) {
    nums += i.toString(n);
  }

  for (let j = p - 1; j < nums.length; j += m) {
    ans += nums[j];
  }

  return ans.slice(0, t).toUpperCase();
}

// best
function solution(n, t, m, p) {
  let res = '';
  let num = 0;
  let seq = '';

  while (res.length < t) {
    if (seq.length >= m) {
      res += seq[p - 1];
      seq = seq.slice(m);
    } else {
      seq += num.toString(n).toUpperCase();
      num++;
    }
  }
  return res;
}

// 2nd
function solution(n, t, m, p) {
  const numbers = [...new Array(1000000)].map((n, idx) => idx);

  const numberedNumbers = numbers.reduce((p, c) => p + `${c.toString(n)}`);

  // console.log(numberedNumbers)

  let answers = [];
  for (let i = 0; i < t; i++) {
    answers.push(numberedNumbers[p + i * m - 1]);
  }

  // console.log(answers.join('').toUpperCase())
  return answers.join('').toUpperCase();
}
