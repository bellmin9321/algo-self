// my solution: ❌ NotSolved -> 시간 초과 및 접근법 완전 실패
var findTheWinner = function (n, k) {
  let arr = Array.from(Array(n), (v, i) => i + 1);
  let i = k - 1;

  while (arr.length !== 1) {
    console.log(arr, i, i % arr.length);
    arr.splice(i % arr.length, 1);
    i++;
  }

  return arr[0];
};

// best
const findTheWinner = function (n, k) {
  let que = [];
  for (let i = 1; i <= n; i++) {
    que.push(i);
  }

  while (que.length > 1) {
    let deleteCount = k - 1;

    while (deleteCount > 0) {
      que.push(que.shift()); //Rotate Elements
      deleteCount--;
    }
    que.shift(); // Delete kth element
  }

  return que.shift();
};

// 2nd
const findTheWinner = (n, k) => {
  let a = [];
  for (let i = 0; i < n; i++) a.push(i + 1);
  let remove = 0;

  while (a.length > 1) {
    remove = (remove + k - 1) % a.length;
    a.splice(remove, 1);
  }
  return a;
};

// 3rd
var findTheWinner = function (n, k) {
  function ans(n, k) {
    if (n == 1) {
      return 0;
    } else {
      return (ans(n - 1, k) + k) % n;
    }
  }

  return ans(n, k) + 1;
};
