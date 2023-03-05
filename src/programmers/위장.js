// 내 풀이: ❌ NotSolved
function solution(clothes) {
  const categories = {};
  let add = 0;
  let multiple = 1;

  clothes.map((items, index) => {
    const [item, category] = items;

    if (!categories[category]) {
      categories[category] = 1;
    } else {
      categories[category]++;
    }
  });
  console.log(categories);

  for (key in categories) {
    add += categories[key];
    multiple *= categories[key];
  }

  return Objec.keys(categories).length === 1 ? add : add + multiple;
}

// Object & reduce 이용 풀이
function solution(clothes) {
  return (
    Object.values(
      clothes.reduce((obj, t) => {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
      }, {}),
    ).reduce((a, b) => a * (b + 1), 1) - 1
  );
}

// 약수 구하는 방법으로 풀이
function solution(clothes) {
  const result = {};
  let count = 1;

  clothes.map((items, index) => {
    const [item, category] = items;

    if (!result[category]) {
      result[category] = 1;
    } else {
      result[category]++;
    }
  });
  console.log(result);

  for (key in result) {
    count *= result[key] + 1;
  }

  return count - 1;
}
