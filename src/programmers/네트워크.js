// my solution
function solution(n, computers) {
  const cache = {};

  for (let i = 0; i < computers.length; i++) {
    const sum = computers[i].reduce((a, b) => a + b);
    if (sum === n) return 1;

    for (let j = 0; j < computers[i].length; j++) {
      if (i !== j) {
        if (cache[j + 1]) {
          cache[j + 1] += computers[i][j];
        } else {
          cache[j + 1] = computers[i][j];
        }
      }
    }
  }

  return Object.values(cache).filter(v => v === 0).length + 1;
}

// my solution2
function solution(n, computers) {
  let network = 1;

  for (let i = 0; i < computers.length; i++) {
    let s = 0;

    for (let j = 0; j < computers[i].length; j++) {
      s += i === j ? 0 : computers[j][i];
    }

    if (s === 0) network++;
  }

  return network;
}

// my solution3
function solution(n, computers) {
  let network = 1;

  for (let i = 0; i < computers.length; i++) {
    const sum = computers[i].reduce((a, b) => a + b);

    if (sum === n) return 1;
    if (sum === 1) network++;
  }

  return network;
}

// best
function solution(n, computers) {
  let answer = 0;
  const isVisited = [];

  for (let i = 0; i < n; i++) {
    isVisited.push(false);
  }

  const DFS = (computers, i) => {
    if (isVisited[i]) return;

    isVisited[i] = true;

    for (let j = 0; j < computers.length; j++) {
      if (computers[i][j] === 1) {
        DFS(computers, j);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!isVisited[i]) {
      answer++;
      DFS(computers, i);
    }
  }

  return answer;
}

// 2nd
function solution(n, computers) {
  let network = 0;
  let visitArr = Array(n).fill(false);

  function dfs(i) {
    if (visitArr[i]) return;

    visitArr[i] = true;

    for (let j in computers[i]) {
      if (computers[i][j] === 1) dfs(j);
    }

    return 1;
  }

  for (let i in computers) {
    network += dfs(i);
  }

  return network;
}
