// my solution
var countPoints = function (rings) {
  let ans = 0;
  const cache = {};

  for (let i = 0; i < rings.length - 1; i += 2) {
    if (cache[rings[i + 1]]) {
      cache[rings[i + 1]].push(rings[i]);
    } else {
      cache[rings[i + 1]] = [rings[i]];
    }
  }

  for (let key in cache) {
    cache[key] = [...new Set(cache[key])];
    if (cache[key].length === 3) ans++;
  }

  return ans;
};

// best
var countPoints = function (rings) {
  let n = rings.length;

  let map = new Map(); // map of  rod nums  to their  set of colors
  for (let i = 0; i < n; i += 2) {
    let color = rings[i];
    let rod = +rings[i + 1];

    if (!map.has(rod)) map.set(rod, new Set());
    map.get(rod).add(color);
  }

  let count = 0;
  for (let [rod, setColors] of map) {
    if (setColors.size == 3) count++;
  }
  return count;
};

// 2nd
var countPoints = function (rings) {
  let rods = '0123456789';
  let count = 0;
  for (let rod of rods) {
    // looping over the variable, rods
    if (
      rings.includes(`R${rod}`) &&
      rings.includes(`G${rod}`) &&
      rings.includes(`B${rod}`)
    )
      count++; // checking if rings includes
    // R, G, & B on that rod
    // if so, add to count
  }
  return count;
};

// 3rd
var countPoints = function (rings) {
  let rods = Array(10).fill('');
  for (let i = 0; i < rings.length; i += 2) {
    if (!rods[rings[i + 1]].includes(rings[i])) rods[rings[i + 1]] += rings[i];
  }
  return rods.filter(rod => rod.length > 2).length;
};
