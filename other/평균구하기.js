function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

function average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) sum += array[i];
  return sum / array.length;
}
