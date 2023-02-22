// my solution
var countMatches = function (items, ruleKey, ruleValue) {
  let index = -Infinity;

  switch (ruleKey) {
    case 'type':
      index = 0;
      break;
    case 'color':
      index = 1;
      break;
    case 'name':
      index = 2;
      break;
  }

  return items.filter(item => item[index] === ruleValue).length;
};

// best
const RULE_IDX = {
  type: 0,
  color: 1,
  name: 2,
};

var countMatches = function (items, ruleKey, ruleValue) {
  return items.reduce(
    (ans, item) => (item[RULE_IDX[ruleKey]] === ruleValue ? ans + 1 : ans),
    0,
  );
};

// 2nd
var countMatches = function (items, ruleKey, ruleValue) {
  const ruleKeys = ['type', 'color', 'name'];
  const keyIndex = ruleKeys.indexOf(ruleKey);
  let count = 0;

  for (let i = 0; i < items.length; i++) {
    if (items[i][keyIndex] === ruleValue) count++;
  }

  return count;
};
