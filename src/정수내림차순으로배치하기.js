function solution(n) {
  return Number([...`${n}`].sort((a, b) => b - a).join(""));
}

function solution(n) {
  return [...`${n}`].sort((a, b) => b - a).join("") * 1;
}

function solution(n) {
  return +[...`${n}`].sort((a, b) => b - a).join("");
}
