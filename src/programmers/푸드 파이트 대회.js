// 내 풀이
function solution(food) {
  const result = [...food].map(v => {
    if (v > 1) {
      return parseInt(v / 2);
    }
  });

  for (let i = 0; i < result.length; i++) {
    result[i] = (i + '').repeat(result[i]);
  }

  return `${result.join('')}0${result.reverse().join('')}`;
}

// 내 풀이 2
function solution(food) {
  const copied = [...food];

  for (let i = 0; i < copied.length; i++) {
    copied[i] = (i + '').repeat(Math.floor(copied[i] / 2));
  }

  return `${copied.join('')}0${copied.reverse().join('')}`;
}

// 다른 풀이
function solution(food) {
  let result = '';

  for (let i = 1; i < food.length; i++) {
    result += (i + '').repeat(Math.floor(food[i] / 2));
  }

  return `${result}0${[...result].reverse().join('')}`;
}
