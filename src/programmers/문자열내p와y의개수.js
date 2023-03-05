function solution(s) {
  const lowerS = s.toLowerCase();
  let countP = 0;
  let countY = 0;

  for (let i = 0; i < s.length; i++) {
    if (lowerS[i] === 'p') {
      countP++;
    } else if (lowerS[i] === 'y') {
      countY++;
    }
  }

  return countP === countY ? true : false;
}
