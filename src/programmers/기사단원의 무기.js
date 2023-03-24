// my solution
function solution(number, limit, power) {
  const ans = [1];

  for (let i = 2; i <= number; i++) {
    let half = Math.floor(i / 2);
    let count = 1; // 자기 자신 약수 미리 count

    while (half > 0) {
      i % half === 0 ? count++ : count;
      half--;
    }

    ans[i - 1] = count > limit ? power : count;
  }

  return ans.reduce((a, b) => a + b);
}

// best
function solution(number, limit, power) {
  var answer = 0;

  for (let n = 1; n <= number; n++) {
    let count = 0;

    for (let j = 1; j * j <= n; j++) {
      if (j * j == n) count++;
      else if (n % j == 0) count += 2;
    }

    if (count > limit) count = power;
    answer += count;
  }

  return answer;
}

// 2nd
const sol = n => {
  if (n == 1) return 1;

  let ret = 1;

  for (let i = 1; i <= n / 2; i++) if (n % i == 0) ret++;

  return ret;
};

function solution(number, limit, power) {
  let ans = 0;

  for (let i = 1; i <= number; i++) {
    const cnt = sol(i);
    ans += cnt > limit ? power : cnt;
  }

  return ans;
}

// 3rd
function solution(number, limit, power) {
  let resultArr = [];
  let res;

  for (let i = 1; i <= number; i++) {
    let temp = [];

    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) temp.push(j);
    }

    res = temp.length;

    for (let k = 0; k < res; k++) {
      temp.push(i / temp[k]);
    }
    resultArr.push(new Set(temp).size);
  }

  res = 0;

  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] > limit) res += power;
    else res += resultArr[i];
  }
  return res;
}
