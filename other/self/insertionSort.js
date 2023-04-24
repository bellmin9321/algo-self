function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let left = i - 1;

    while (left >= 0 && arr[left] > current) {
      arr[left + 1] = arr[left];
      arr[left] = current;
      current = arr[left];
      left--;
    }
  }

  return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let left = i - 1;

    while (left >= 0 && arr[i] > current) {
      arr[left + 1] = arr[left];
      left--;
    }

    arr[left + 1] = current;
    console.log(`${i + 1}회전: ${arr}`);
  }

  return arr;
}

console.log(insertionSort([5,4,3,2,1]));