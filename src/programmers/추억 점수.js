// my solution: ⭕️ Solved(10min)
function solution(name, yearning, photo) {
  const map = {};

  name.forEach((v, i) => (map[v] = yearning[i]));

  return photo.map(arr => arr.reduce((a, b) => (a += map[b] || 0), 0));
}
명;
