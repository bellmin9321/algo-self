// my solution
var countAsterisks = function (s) {
  return (
    s
      .split('|')
      .filter((v, i) => i % 2 === 0)
      .join('')
      .split('*').length - 1
  );
};

// best
var countAsterisks = function (s) {
  let green = true,
    count = 0;
  for (let i = 0; i < s.length; i++) {
    if (green && s[i] == '*') {
      count++;
    }
    if (s[i] == '|') {
      green = !green;
    }
  }
  return count;
};
