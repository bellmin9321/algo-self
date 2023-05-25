// my solution: ❌ NotSolved(1h10m, 3/8)
function beautifulPairs(A, B) {
  const cache = {};
  A.forEach(v => {
    if (!B.includes(v)) {
      cache[v] = (cache[v] || 0) + 1;
    }
  });

  const max = Math.max(...Object.values(cache));
  const pairs = [];

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] === B[j]) {
        pairs.push([i, j]);
        break;
      }
    }
  }

  return pairs.length + (max ? max : 0);
}

// best
function beautifulPairs(A, B) {
  let counter = 0;

  for (let i = 0; i < A.length; i++) {
    if (B.includes(A[i])) {
      counter += 1;
      B.splice(B.indexOf(A[i]), 1);
    }
  }

  // B의 요소가 반드시 1개는 바뀌어야하므로 A, B 두 쌍이 모두 같더라도 B의 요소가 한개 바뀌어야 하므로 counter - 1을 해야함
  return B.length ? counter + 1 : counter - 1;
}

// 2nd
function beautifulPairs(A, B) {
  // key is num in A or B, and the value is the occurance total
  const mapA = new Map();
  const mapB = new Map();
  const arrLength = A.length;
  for (let i = 0; i < arrLength; i++) {
    if (!mapA.has(A[i])) {
      mapA.set(A[i], 1);
    } else if (mapA.has(A[i])) {
      mapA.set(A[i], mapA.get(A[i]) + 1);
    }
    if (!mapB.has(B[i])) {
      mapB.set(B[i], 1);
    } else if (mapB.has(B[i])) {
      mapB.set(B[i], mapB.get(B[i]) + 1);
    }
  }

  let res = 0;
  mapA.forEach((value, key) => {
    if (mapB.has(key)) {
      res += Math.min(mapB.get(key), value);
    }
  });

  //  You must first change  element in , and your choice of element must be optimal
  if (res === A.length) {
    // we'll have to change an element, so we substract it
    return res - 1;
  } else {
    return res + 1;
  }
}

// 3rd
function beautifulPairs(A, B) {
  const bucket = {};
  for (const n of A) {
    if (!bucket[n]) {
      bucket[n] = 0;
    }

    bucket[n]++;
  }

  let count = 0;
  let notfound = false;

  for (const n of B) {
    if (bucket[n]) {
      bucket[n]--;
      count++;
      continue;
    }
    notfound = true;
  }

  return notfound ? count + 1 : count - 1;
}
