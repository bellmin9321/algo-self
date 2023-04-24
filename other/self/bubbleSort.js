function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swap;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
    }
    console.log(`${i + 1}회전: ${arr}`);

    if (!swap) break;
  }

  return arr;
}

console.log(bubbleSort([5, 4, 3, 2, 1]));
