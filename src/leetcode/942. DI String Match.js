// my soltuion && best
var diStringMatch = function (s) {
  const arr = [];
  let dec = s.length;
  let inc = 0;

  for (let i = 0; i < s.length + 1; i++) {
    arr[i] = s[i] === 'I' ? inc++ : dec--;
  }

  return arr;
};

// 2nd
var diStringMatch = function (s) {
  let count1 = -1;
  let count2 = s.length + 1;
  const result = [];
  for (let i = 0; i <= s.length; i++) {
    if (s[i] === 'I') {
      count1 = count1 + 1;
      result.push(count1);
    } else {
      count2 = count2 - 1;
      result.push(count2);
    }
  }
  return result;
};

// 3rd
var diStringMatch = function (S) {
  let res = [],
    low = 0,
    high = S.length;

  for (let i = 0; i <= S.length; i++) {
    if (S.charAt(i) == 'I') {
      res.push(low++);
    } else {
      res.push(high--);
    }
  }
  return res;
};
