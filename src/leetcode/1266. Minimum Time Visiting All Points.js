// my solution && best
var minTimeToVisitAllPoints = function (points) {
  let ans = 0;

  for (let i = 1; i < points.length; i++) {
    const [x0, y0] = points[i - 1];
    const [x1, y1] = points[i];

    ans += Math.max(Math.abs(x0 - x1), Math.abs(y0 - y1));
  }

  return ans;
};
