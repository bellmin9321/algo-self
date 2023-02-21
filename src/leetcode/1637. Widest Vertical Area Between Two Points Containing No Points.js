// my solution
var maxWidthOfVerticalArea = function (points) {
  const x = points.map(v => v[0]).sort((a, b) => a - b);
  const arr = [];

  for (let i = 0; i < x.length - 1; i++) {
    arr.push(x[i + 1] - x[i]);
  }

  return Math.max(...arr);
};
