// ❌ NotSolved: 정답 봄
function solution(numbers) {
  numbers.forEach((num, i) => {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        numbers[i] = numbers[j];
        break;
      }

      if (j === numbers.length - 1) numbers[i] = -1;
    }

    if (i === numbers.length - 1) numbers[i] = -1;
  });

  return numbers;
}

// Try2: two -> ❌ NotSolved
function solution(numbers) {
  let i = 0,
    j = i + 1;

  while (i < numbers.length - 1) {
    if (numbers[i] < numbers[j]) {
      numbers[i] = numbers[j];
      i++;
      j = i;
    }

    if (j === numbers.length - 1) {
      numbers[i] = -1;
      i++;
      j = i;
    }

    j++;
  }
  numbers[numbers.length - 1] = -1;

  return numbers;
}

// Try3 : stack 이용 -> ❌ NotSolved
function solution(numbers) {
  const stack = [numbers.shift()];

  for (let i = 0; i < numbers.length; i++) {
    if (stack[stack.length - 1] < numbers[i]) {
      stack.pop();
      stack.push(numbers[i], numbers.shift());
      i = -1;
      continue;
    }

    if (i === numbers.length - 1) {
      stack.pop();
      stack.push(-1, numbers.shift());
      i = -1;
    }
  }
  stack[stack.length - 1] = -1;

  return stack;
}

// best
function solution(numbers) {
  const answer = Array(numbers.length);
  let check = [0];

  for (let i = 1; i < numbers.length; i++) {
    while (check.length && numbers[check[check.length - 1]] < numbers[i]) {
      answer[check.pop()] = numbers[i];
    }
    check.push(i);
  }

  while (check.length) {
    answer[check.pop()] = -1;
  }

  return answer;
}

// 2nd
function solution(nums) {
  const dp = new Array(nums.length).fill(-1);
  const stack = [0];

  for (let i = 1; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i])
      dp[stack.pop()] = nums[i];
    stack.push(i);
  }

  return dp;
}
