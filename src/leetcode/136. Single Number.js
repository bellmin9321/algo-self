// 내 풀이: reduce 이용 Runtime 125 ms Beats 27.87% | Memory 51.4 MB Beats 5.5%
var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0];

  const obj = nums.reduce((obj, cur) => {
    obj[cur] = obj[cur] ? obj[cur] + 1 : 1;
    return obj;
  }, {});

  for (key in obj) {
    if (obj[key] === 1) return key;
  }
};

// 최다 추천: ^(비트 연산자)를 이용한 풀이
function singleNumber(nums) {
  return nums.reduce((prev, curr) => prev ^ curr);
}

// Hash 이용
function singleNumber(nums) {
  const map = {};
  for (let n of nums) {
    if (map[n] == null) map[n] = 0;
    map[n]++;
  }

  for (let n in map) {
    if (map[n] === 1) return Number(n);
  }
}

var singleNumber = function (nums) {
  let hash = {};
  for (let val of nums) {
    hash[val] ? delete hash[val] : (hash[val] = 1);
  }
  return Object.keys(hash)[0];
};
