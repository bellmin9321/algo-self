// my solution
var leftRigthDifference = function(nums) {
    const leftSum = [0];
    const rightSum = [0];

    for (let i = 0; i < nums.length - 1; i++) {
      leftSum.push(leftSum[i] + nums[i]);
      rightSum.unshift(rightSum[rightSum.length - 1 - i] + nums[nums.length - 1 - i]);
    }

    return leftSum.map((v, i) => Math.abs(v - rightSum[i]));
};