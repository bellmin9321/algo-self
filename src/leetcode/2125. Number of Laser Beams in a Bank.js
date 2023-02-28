// my solution
var numberOfBeams = function(bank) {
  const beams = bank.map(beam => beam.replaceAll(0, '').length);
  const filtered = beams.filter(v => v !== 0);
  let ans = 0;

  for (let i = 1; i < filtered.length; i++) {
    ans += filtered[i - 1] * filtered[i];
  }

  return ans;
};