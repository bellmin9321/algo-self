function solution(arr) {
  if (arr.length === 1) return [-1];
  const sorted = [...arr].sort((a, b) => a - b);
  
  return arr.filter((v) => v !== sorted[0]);
}