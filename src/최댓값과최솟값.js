function solution(s) {
  const arr = s.split(" ").map((v) => Number(v));

  return `${Math.min(...arr)} ${Math.max(...arr)}`;
}
