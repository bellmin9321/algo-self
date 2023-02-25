// my solution
var sumOddLengthSubarrays = function (arr) {
  // 요소가 1개일 때는 전체를 더하는 것과 같으므로 기본값으로 arr의 합을 넣어줌
  let ans = sum(arr);

  // ans에 요소 1개일 때 미리 더했으므로 3개 요소부터 시작
  for (let i = 3; i <= arr.length; i += 2) {
    for (let j = 0; j <= arr.length - i; j++) {
      ans += sum(arr.slice(j, j + i));
    }
  }

  return ans;
};

const sum = arr => arr.reduce((a, b) => a + b);

// best
/*
 T.C: O(N) | S.C: O(1)
Suppose N is the length of given array.
Number of subarrays including element arr[i] is
i * (N-i) + (N-i) because there are N-i subarrays with arr[i] as first element
and i * (N-i) subarrays with arr[i] as a not-first element. arr[i] appears in 
(N-i) subarrays for each preceding element and therefore we have i*(N-i).

Suppose i * (N-i) + (N-i) is `total`. Ceil(total / 2) is the number of odd-length subarrays and Floor(total / 2) is the number of even-length subarrays. 
When total is odd, there is one more odd-length subarray because of a single-element subarray.
    
For each number, we multiply its value with the total number of subarrays it appears and
add it to a sum.
*/
var sumOddLengthSubarrays = function (arr) {
  let sum = 0,
    N = arr.length;

  for (let i = 0; i < arr.length; i++) {
    let total = i * (N - i) + (N - i);
    sum += Math.ceil(total / 2) * arr[i];
  }

  return sum;
};

// 2nd
var sumOddLengthSubarrays = function (arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    // helping in selecting the starting point

    for (let j = i; j < arr.length; j++) {
      // helping in selecting the endpoint point

      if ((i - j) % 2 == 0) {
        // so that it only count the subarrays which have odd length

        for (let k = i; k <= j; k++) {
          // looping from start point to end point and adding them
          count += arr[k];
        }
      }
    }
  }
  return count;
};

// 3rd
var sumOddLengthSubarrays = function (arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const odd = [];

    for (let j = i; j < arr.length; j++) {
      odd.push(arr[j]);

      if (odd.length % 2 !== 0)
        count += odd.reduce((acc, curr) => acc + curr, 0);
    }
  }
  return count;
};
