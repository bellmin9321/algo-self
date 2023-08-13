// my solution
function breakingRecords(scores) {
  let count = [0, 0];
  let max = scores[0];
  let min = scores[0];

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > max) {
      count[0]++;
      max = scores[i];
    } else if (scores[i] < min) {
      count[1]++;
      min = scores[i];
    }
  }

  return count;
}
