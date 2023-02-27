// my solution
var numberOfMatches = function(n) {
  let matches = 0;

    while (n > 1) {
      if (n % 2 === 0){ // 짝수
        n /= 2;
        matches += n;
      } else { // 홀수
        n = (n - 1) / 2;
        matches += n;
        n++;
      }
    } 

    return matches;
};