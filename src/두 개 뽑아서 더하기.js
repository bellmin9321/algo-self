function solution(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (result.indexOf(numbers[i] + numbers[j]) === -1) {
        // result 내 조합한 수가 없으면 push (중복값 제거)
        result.push(numbers[i] + numbers[j]);
      }
    }
  }

  return result.sort((a, b) => a - b);
}
