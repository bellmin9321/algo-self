// my solution
function solution(elements) {
  const expanded = [...elements, ...elements];
  let result = [];

  for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      const sum = expanded.slice(j, j + i + 1).reduce((a, b) => a + b);
      result.push(sum);
    }
  }

  return new Set(result).size;
}

// best
function solution(elements) {
  const circular = elements.concat(elements);
  const set = new Set();

  for (let i = 0; i < elements.length; i++) {
    let sum = 0;

    for (let j = 0; j < elements.length; j++) {
      sum += circular[i + j];
      set.add(sum);
    }
  }
  return set.size;
}

// 2nd
function solution(elements) {
  var answer = 0;
  const sum = arr => arr.reduce((a, b) => a + b, 0);

  const set = new Set();

  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      if (j + i > elements.length) {
        set.add(
          sum(elements.slice(j, elements.length)) +
            sum(elements.slice(0, j + i - elements.length)),
        );
      } else {
        set.add(sum(elements.slice(j, j + i)));
      }
    }
  }

  answer = set.size;

  return answer;
}

// 3rd
function solution(elements) {
  const set = new Set();
  for (let i = 1; i <= elements.length; i++) {
    const els = elements.concat(elements.slice(0, i));
    for (let j = 0; j < elements.length; j++) {
      set.add(els.slice(j, j + i).reduce((a, c) => a + c, 0));
    }
  }
  return set.size;
}
