function solution(s) {
  return (
    s.toLowerCase().split("p").length === s.toLowerCase().split("y").length
  );
}

function solution(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}

function numPY(s) {
  let result = true;
  s = s.toUpperCase();
  let num = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "P") num++;
    if (s[i] === "Y") num--;
  }
  result = num === 0;

  return result;
}

function solution(s) {
  return [...s.toLowerCase()].reduce((acc, cur) => {
    if (cur === "p") return acc + 1;
    else if (cur === "y") return acc - 1;
    return acc;
  }, 0)
    ? false
    : true;
}
