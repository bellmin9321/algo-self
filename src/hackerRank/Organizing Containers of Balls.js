// my solution: ❌ NotSolved(50min) -> 문제 이해 잘 못하겠고 어떻게 접근해야 될 지 모르겠음
function organizingContainers(container) {
  const cache = {};
  container.forEach(type => {
    type.forEach((v, i) => {
      cache[i] = (cache[i] || 0) + v;
    });
  });
  console.log(cache);
  return [...new Set(Object.values(cache))].length === 1
    ? 'Possible'
    : 'Impossible';
}

// best
function organizingContainers(container) {
  let capcityEach = [];
  let typeEach = [];
  //Capcity of each Continer
  for (let i = 0; i < container.length; i++) {
    let total = 0;
    let type = 0;

    for (let j = 0; j < container[i].length; j++) {
      total = total + container[i][j]; // capcity;
      type = type + container[j][i]; // type;
    }
    capcityEach.push(total);
    typeEach.push(type);
  }

  let sorted1 = capcityEach.sort((a, b) => a - b);
  let sorted2 = typeEach.sort((a, b) => a - b);

  for (let i = 0; i < sorted1.length; i++) {
    if (sorted1[i] != sorted2[i]) {
      return 'Impossible';
    }
  }
  return 'Possible';
}

// 2nd
function organizingContainers(container) {
  let colours = container[0].length;
  let arr = Array(colours).fill(0);
  let capacity = [];
  let count = 0;

  for (var i = 0; i < container.length; i++) {
    for (var j = 0; j < colours; j++) {
      arr[j] += container[i][j];
    }
  }

  container.forEach(element => {
    capacity.push(element.reduce((a, b) => a + b));
  });

  for (let i = 0; i < arr.length; i++) {
    if (capacity.includes(arr[i])) {
      count++;
    }
  }

  return count < colours ? 'Impossible' : 'Possible';
}

// 3rd
function organizingContainers(container) {
  let counts = Array(container.length).fill(0);
  let sizes = Array(container.length).fill(0);
  for (let i = 0; i < container.length; i++) {
    let row = container[i];
    sizes[i] += getSum(row);
    for (let j = 0; j < row.length; j++) {
      let cellValue = row[j];
      counts[j] += cellValue;
    }
  }
  function getSum(row) {
    let sum = 0;
    for (let i = 0; i < row.length; i++) {
      sum += row[i];
    }
    return sum;
  }
  function checkIfSizeMatchesCount(sizes, counts) {
    let tooSmall = false;
    for (let i = 0; i < sizes.length; i++) {
      let size = sizes[i];
      let count = counts[i];
      if (size < count) {
        tooSmall = true;
        break;
      }
    }
    return tooSmall;
  }
  counts.sort((a, b) => a - b);
  sizes.sort((a, b) => a - b);
  let impossible = checkIfSizeMatchesCount(sizes, counts);
  return impossible ? 'Impossible' : 'Possible';
}
