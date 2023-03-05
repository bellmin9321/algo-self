function average(array) {
  const total = array.reduce((acc, cur) => acc + cur);

  return total / array.length;
}
