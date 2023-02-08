// 내 풀이: Set을 이용
function solution(nums) {
  const uniqueNums = [...new Set(nums)];

  return nums.length / 2 >= uniqueNums.length
    ? uniqueNums.length
    : nums.length / 2;
}
