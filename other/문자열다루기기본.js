function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;

  for (value of s) {
    if (isNaN(value)) {
      return false;
    }
  }

  return true;
}

function solution(s) {
  return s.length !== 4 || (s.length !== 6 && isNaN(s)) ? !isNaN(s) : false;
}

function solution(s) {
  const regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
