function solution(s) {
  return s
    .toLowerCase()
    .split(' ')
    .map((v, i) =>
      [...v].map((w, j) => (j % 2 === 0 ? w.toUpperCase() : w)).join(''),
    )
    .join(' ');
}
