// my solution: ❌ NotSolved(50min)

function nonDivisibleSubset(k, s) {
  function createMaxSubset(arr) {
    const ans = [];
    let flag = true;

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if ((arr[i] + arr[j]) % k !== 0) {
          flag = false;
          ans.push(arr[i], arr[j]);
        }
      }
    }

    return flag ? ans.length : createMaxSubset(ans);
  }

  return createMaxSubset(s);
}

// best
function nonDivisibleSubset(k, s) {
  //creates remainder array of length k where each entry starts at 0
  let remainders = new Array(k).fill(0);
  //tallies in remainder array the remainder of each number in array s when divided by k, where the first array entry is for remainder 0 and so on up to k-1
  s.forEach(num => remainders[num % k]++);
  let result = 0;
  //if there are numbers with 0 as a remainder, take one of those for the maximal set, only one because combos of those will create numbers that are evenly divisible by k, if there are 0 there are none to take
  if (remainders[0] !== 0) {
    result += 1;
  }
  //if k is an even number then there exists a set of numbers with remainder k/2, if we have any of these numbers in our array set then we only want to take one of them for the maximal set because combos of those will create numbers that are evenly divisible by k, if there are 0 there are none to take
  if (k % 2 == 0 && remainders[k / 2] !== 0) {
    result += 1;
  }
  //the rest of the numbers in the array exist in pair sets with matching remainders (ie: if k=7 then 1 and 6, 2 and 5, 3 and 4), because we are looking for the maximal set we choose numbers within each pair that have greater representation (ie: if more numbers have remainder 1 than remainder 6, we include the numbers that have remainder 1), those numbers can be added together with each other as well as any other numbers in the array (except their matching pair numbers) without creating numbers that are evenly divisible by k
  for (let i = 1; i < k / 2; i++) {
    result += Math.max(remainders[i], remainders[k - i]);
  }
  return result;
}

// 2nd
function nonDivisibleSubset(k, s) {
  const remainders = new Array(k).fill(0);
  s.forEach(num => remainders[num % k]++);
  let result = (remainders[0] ? 2 : 1) - (k % 2);

  for (let i = 1; i < k / 2; i++) {
    result += Math.max(remainders[i], remainders[k - i]);
  }

  return result;
}
