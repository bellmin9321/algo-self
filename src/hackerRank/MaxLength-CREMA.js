// my solution
function longestSubarraySum(a, k) {
  let maxLength = 0;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < a.length; right++) {
    sum += a[right];

    while (sum > k) {
      sum -= a[left];
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}