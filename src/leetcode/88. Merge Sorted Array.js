// 내 풀이: Runtime 76 ms Beats 34.53% | Memory 42.5 MB Beats 17.79%
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < nums2.length; i++) {
    nums1.splice(nums1.indexOf(0), 1, nums2[i]);
  }

  return nums1.sort((a, b) => a - b);
};
// Runtime 64 ms Beats 74.23% Memory 42.1 MB Beats 47.17%
var merge = function (nums1, m, nums2, n) {
  let insertPos = m + n - 1;
  m--;
  n--;
  while (n >= 0) {
    nums1[insertPos--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
};

// Runtime 76 ms Beats 34.53% Memory 42 MB Beats 68.42%
var merge = function (nums1, m, nums2, n) {
  let idx1 = m - 1,
    idx2 = n - 1,
    idx3 = m + n - 1;
  while (idx2 >= 0) {
    nums1[idx3--] = nums1[idx1] > nums2[idx2] ? nums1[idx1--] : nums2[idx2--];
  }
};
