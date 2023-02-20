// my solution: Runtime 573 ms Beats 25.41% Memory 44.5 MB Beats 58.20%
var minOperations = function (boxes) {
  const result = [];
  const boxArr = [...boxes];

  for (let i = 0; i < boxArr.length; i++) {
    let sum = 0;
    for (let j = 0; j < boxArr.length; j++) {
      if (boxArr[j] === '1') {
        sum += Math.abs(j - i);
      }
    }

    result.push(sum);
  }

  return result;
};

// best: Runtime 91 ms Beats 81.15% Memory 44.6 MB Beats 43.44%
function minOperations(boxes) {
  const result = Array(boxes.length).fill(0);

  // First we make one pass through the array (left to right).
  // For each index, we calculate the moves needed to get every
  // non-empty box on the left of the current index to the current index.

  // At each i in boxes:
  //   - add the running sum to result[i]
  //   - increment the notEmpty box count if the current box is '1'
  //   - add the previously seen notEmpty boxes (including current index) to the runningSum

  let notEmpty = 0;
  let runningSum = 0;

  for (let i = 0; i < boxes.length; ++i) {
    result[i] += runningSum;
    if (boxes[i] === '1') ++notEmpty;
    runningSum += notEmpty;
  }

  // Make one more pass through the array (right to left).
  // The operations are identical to the first loop, except that
  // this pass calculates the moves needed to get every non-empty box
  // on the right of each index to the current index.

  notEmpty = 0;
  runningSum = 0;

  for (let i = boxes.length - 1; i >= 0; --i) {
    result[i] += runningSum;
    if (boxes[i] === '1') ++notEmpty;
    runningSum += notEmpty;
  }

  return result;
}

// 2nd : O(n) / O(1) memory
var minOperations = function (boxes) {
  const ans = new Array(boxes.length).fill(0);

  let ballsLeft = 0,
    ballsRight = 0;
  let movesLeft = 0,
    movesRight = 0;

  const len = boxes.length - 1;

  for (let i = 0; i <= len; i++) {
    movesLeft += ballsLeft;
    movesRight += ballsRight;
    ans[i] += movesLeft;
    ans[len - i] += movesRight;
    ballsLeft += +boxes[i];
    ballsRight += +boxes[len - i];
  }

  return ans;
};
