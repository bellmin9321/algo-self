function solution(strings, n) {
  // 동일한 alphabet을 Set으로 중복 제거
  const alphabet = [...new Set(strings.map(v => v[n]).sort())];
  let result = [];

  for (let i = 0; i < alphabet.length; i++) {
    // alphabet과 같은 strings[n] 요소를 찾아 문자열만 filter
    const filtered = strings.filter((v, idx) => v[n] === alphabet[i]).sort();
    result = result.concat(filtered);
  }

  return result;
}
