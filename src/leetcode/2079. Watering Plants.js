// my solution
var wateringPlants = function (plants, capacity) {
  let steps = 0;
  let water = capacity;

  for (let i = 0; i < plants.length; i++) {
    if (plants[i] <= water) {
      steps++;
      water -= plants[i];
    } else {
      steps += 2 * i;
      water = capacity;
      i--;
    }
  }

  return steps;
};
