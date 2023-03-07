// my solution
var minOperations = function (n) {
  const arr = [];
  let ans = 0;

  for (let i = 0; i < n; i++) {
    arr.push(2 * i + 1);
  }

  if (arr.length % 2 === 0) {
    for (let i = 0; i < arr.length / 2; i++) {
      ans += arr[i];
    }
  } else {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      ans += 2 * (i + 1);
    }
  }

  return ans;
};

// 2nd
var minOperations = function (n) {
  // For example when n = 4
  // 1 3 5 7    -> (4 is the middle element)
  // 3 1 ..     -> (steps to increment to become the middle element
  if (n % 2 === 0) {
    // return (n / 2) * (1 + n - 1) / 2; (N = n/2 , A1 = 1 and An = n - 1)
    return (n * n) / 4; // simplified above
  }
  // For example when n = 5
  // 1 3 5 7 9  -> (5 is the middle element)
  // 4 2        -> (steps to increment to become the middle element)
  // return (n - 1) / 2 * (2 + n - 1) / 2; (N = (n-1)/2 , A1 = 2 and An = n - 1)
  return (n * n - 1) / 4;

  // Also you can combine above two cases.
  // return (n * n - n % 2) / 4;
};

// 3rd
/*
  linear function: 2n + 1
  target = sum(1 to f(n)) / n

  nth element (last elements value) = 2 * (n - 1) + 1
  target = avg of first and nth element: (2 * (n - 1) + 1 + 1) / 2
  simplify target => (2n - 2 + 2) / 2, which is = n;
*/
var minOperations = function (n) {
  let counter = 0;
  for (let i = 1; i < n; i += 2) {
    counter += n - i;
  }
  return counter;
};
