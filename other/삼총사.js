const number = [-1, -2, 0, 1, 2];

function solution(number) {
  let result = 0;

  const combination = (current, start) => {
    if (current.length === 3) {
      result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
      return;
    }

    for (let i = start; i < number.length; i++) {
      combination([...current, number[i]], i + 1);
    }
    console.log(current);
  };

  combination([], 0);
  return result;
}

console.log(solution(number));
