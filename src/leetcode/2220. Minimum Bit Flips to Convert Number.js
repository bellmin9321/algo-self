// my solution
var minBitFlips = function (start, goal) {
  let steps = 0;
  let sBinary = start.toString(2);
  let gBinary = goal.toString(2);

  if (sBinary.length > gBinary.length) {
    gBinary = gBinary.padStart(sBinary.length, '0');
  } else {
    sBinary = sBinary.padStart(gBinary.length, '0');
  }

  for (let i = 0; i < sBinary.length; i++) {
    if (sBinary[i] !== gBinary[i]) steps++;
  }

  return steps;
};

// best
var minBitFlips = function (start, goal) {
  return (start ^ goal).toString(2).split('0').join('').length;
};

// best2
var minBitFlips = (n, m) => (n ^ m).toString(2).replace(/0/g, '').length;

// 2nd
var minBitFlips = function (n, p) {
  let count = 0;
  while (p != 0 || n != 0) {
    let d = p & 1;
    let f = n & 1;
    if (d != f) {
      count++;
    }
    n = n >> 1;
    p = p >> 1;
  }

  return count;
};
