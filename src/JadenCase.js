function solution(s) {
  return s
    .toLowerCase()
    .split(' ')
    .map(v => v.replace(v[0], v.charAt(0).toUpperCase()))
    .join(' ');
}

function solution(s) {
  return s
    .toLowerCase()
    .split(' ')
    .map(v => v.charAt(0).toUpperCase())
    .join(' ');
}

function solution(s) {
  return s
    .toLowerCase()
    .split(' ')
    .map(v => v.charAt(0).toUpperCase() + v.slice(1))
    .join(' ');
}

function solution(s) {
  return s
    .toLowerCase()
    .split(' ')
    .map(v => (v !== '' ? v[0].toUpperCase() + v.slice(1) : v))
    .join(' ');
}
