// my solution: ❌ NotSolved(40min)
function formingMagicSquare(s) {
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const duplicated = [];

  s.forEach(r => {
    r.forEach(c => {
      const targetIdx = nums.indexOf(c);
      if (targetIdx >= 0) nums.splice(targetIdx, 1);
      else duplicated.push(c);
    });
  });

  duplicated.sort((a, b) => b - a);
  return nums.reduce((a, c, i) => (a += Math.abs(c - duplicated[i])), 0);
}

// best
function formingMagicSquare(s) {
  let n = 8,
    costs = Array(n).fill(0),
    magic = [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ];

  for (let i = 0; i < n; i++) {
    const isEven = i % 2 === 0;

    magic.forEach(([a, b, c], j) => {
      costs[i] += Math.abs(s[isEven ? 0 : 2][j] - a);
      costs[i] += Math.abs(s[1][j] - b);
      costs[i] += Math.abs(s[isEven ? 2 : 0][j] - c);
    });

    if (isEven) s = [0, 1, 2].map(j => [s[2][j], s[1][j], s[0][j]]);
  }

  return Math.min(...costs);
}
/*
What is the above algorithm doing?

We know that there are only 8 possible combinations of the Magic Matrix. This is our truth, that will help us solve this problem.

Now for every one of the 8 Matrices, we make an Array to keep their costs and a loop to calculate each cost.

Inside the loop, magic.forEach(...) basically computes the "difference" between the Magic Array and our S Matrix.

Every time isEven is true, we execute the loop, switch the values in the forEach loop on the spot, and then for the next iterattion we "suffle" our S matrix to test another version.

S before the s = [0, 1, 2].map(j => [s[2][j], s[1][j], s[0][j]]) execute: [ [ 4, 3, 8 ], [ 9, 5, 1 ], [ 2, 7, 6 ] ]

After: [ [ 2, 9, 4 ], [ 7, 5, 3 ], [ 6, 1, 8 ] ]

Again: [ [ 6, 7, 2 ], [ 1, 5, 9 ], [ 8, 3, 4 ] ]

The final result will be minimum(MAGIX_MATRIX-S)
*/

// 2nd
const theMagic = [
  [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2],
  ],
  [
    [6, 1, 8],
    [7, 5, 3],
    [2, 9, 4],
  ],
  [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6],
  ],
  [
    [2, 9, 4],
    [7, 5, 3],
    [6, 1, 8],
  ],
  [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2],
  ],
  [
    [4, 3, 8],
    [9, 5, 1],
    [2, 7, 6],
  ],
  [
    [6, 7, 2],
    [1, 5, 9],
    [8, 3, 4],
  ],
  [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
  ],
];

let lowest = Number.MAX_SAFE_INTEGER;

for (let k = 0; k < theMagic.length; k++) {
  let totalDiff = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 3; j++) {
      totalDiff += Math.abs(s[i][j] - theMagic[k][i][j]);
    }
  }
  if (totalDiff < lowest) {
    lowest = totalDiff;
  }
}

return lowest;
