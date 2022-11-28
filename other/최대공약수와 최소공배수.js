function gcdlcm(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}

function greatestCommonDivisor(a, b) {
  return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);
}
function leastCommonMultipleOfTwo(a, b) {
  return (a * b) / greatestCommonDivisor(a, b);
}
function gcdlcm(a, b) {
  return [greatestCommonDivisor(a, b), leastCommonMultipleOfTwo(a, b)];
}

function gcdlcm(a, b) {
  var gcd = calc_gcd(a, b);
  var lcm = (a * b) / gcd;

  return [gcd, lcm];
}

function calc_gcd(a, b) {
  if (b == 0) return a;
  return a > b ? calc_gcd(b, a % b) : calc_gcd(a, b % a);
}
