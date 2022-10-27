function solution(x) {
  return !(x % [...`${x}`].reduce((acc, cur) => Number(acc) + Number(cur)));
}

function solution(x) {
  return x % [...`${x}`].reduce((acc, cur) => Number(acc) + Number(cur))
    ? false
    : true;
}
