// my solution
function solution(board, moves) {
  let ans = 0;
  const bucket = [];
  const reverse = Array.from(Array(board[0].length), () =>
    Array(board.length).fill(0),
  );

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      reverse[j][i] = board[i][j];
    }
  }

  const filtered = reverse.map(arr => arr.filter(v => v !== 0));

  for (const m of moves) {
    const pick = filtered[m - 1].shift();
    pick ? bucket.push(pick) : null;
  }

  for (let i = 0; i < bucket.length - 1; i++) {
    if (bucket[i] === bucket[i + 1]) {
      ans += 2;
      bucket.splice(i, 2);
      i -= 2;
    }
  }

  return ans;
}

// best
const transpose = matrix =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    [],
  );

const solution = (board, moves) => {
  const stacks = transpose(board).map(row =>
    row.reverse().filter(el => el !== 0),
  );
  const basket = [];
  let result = 0;

  for (const move of moves) {
    const pop = stacks[move - 1].pop();
    if (!pop) continue;
    if (pop === basket[basket.length - 1]) {
      basket.pop();
      result += 2;
      continue;
    }
    basket.push(pop);
  }

  return result;
};

// 2nd
function solution(board, moves) {
  let count = 0;
  let stack = [];

  for (let i = 0; i < moves.length; i++) {
    let now = moves[i] - 1;

    for (let j = 0; j < board.length; j++) {
      if (board[j][now] != 0) {
        if (stack[stack.length - 1] === board[j][now]) {
          stack.pop();
          count += 2;
        } else {
          stack.push(board[j][now]);
        }
        board[j][now] = 0;
        break;
      }
    }
  }

  return count;
}

// 3rd
function solution(board, moves) {
  let answer = 0;
  let arr = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        arr.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        break;
      }
    }

    if (arr.length >= 2) {
      if (arr[arr.length - 1] === arr[arr.length - 2]) {
        answer += 2;
        arr.splice(arr.length - 2, 2);
      }
    }
  }
  return answer;
}
