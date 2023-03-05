// my solution
function solution(s, n) {
  let result = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      result += ' ';
    } else {
      let codeAt = s[i].charCodeAt() + n;

      if (s[i] === s[i].toLowerCase()) {
        if (codeAt > 122) codeAt -= 26;
      } else {
        if (codeAt > 90) codeAt -= 26;
      }

      result += String.fromCharCode(codeAt);
    }
  }
  어;

  return result;
}
