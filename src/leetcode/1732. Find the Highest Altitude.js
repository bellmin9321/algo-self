// my solution
var largestAltitude = function(gain) {
  const ans = [0];

  for (let i in gain) {
    ans.push(gain[i] + ans[i]);
  }
  return Math.max(...ans);
};