function solution(s) {
  let i = 0;

  while (s.length) {
    if (s[i] !== s[i + 1]) {
      if (i === s.length - 1) return 0;
      i++;
    } else {
      s = s.replaceAll(s[i] + s[i + 1], '');
      i = 0;
    }
  }

  return 1;
}
