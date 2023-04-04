// my solution
var countBits = function (n) {
  const ans = [];

  for (let i = 0; i <= n; i++) {
    ans.push([...i.toString(2)].filter(v => v === '1').length);
  }

  // replace
  // for (let i = 0; i <= n; i++) {
  //   ans.push(i.toString(2).replace(/0/g, '').length);
  // }

  // split & join
  // for (let i = 0; i <= n; i++) {
  //   ans.push(i.toString(2).split('0').join('').length);
  // }

  return ans;
};

// best
const countBits = n => {
  let result = Array(n + 1).fill(0);
  let offset = 1;

  for (let i = 1; i < n + 1; i++) {
    if (offset * 2 === i) {
      offset = i;
    }
    result[i] = 1 + result[i - offset];
  }

  return result;
};
