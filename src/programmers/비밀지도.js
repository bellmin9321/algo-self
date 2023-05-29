// 2번째 푼 풀이: ⭕️ Solved(23.05.12)
function solution(n, arr1, arr2) {
  return arr1.map((v, i) => {
    const binary1 = v.toString(2).padStart(n, 0);
    const binary2 = arr2[i].toString(2).padStart(n, 0);
    let ans = '';

    for (let j = 0; j < binary1.length; j++) {
      if (binary1[j] === '1' || binary2[j] === '1') ans += '#';
      else ans += ' ';
    }

    return ans;
  });
}

function solution(n, arr1, arr2) {
  const binaryArr1 = arr1.map(v => v.toString(2));
  const binaryArr2 = arr2.map(v => v.toString(2));
  const result = [];

  for (let i = 0; i < n; i++) {
    let secret = '';
    const lengthDiffer1 = n - binaryArr1[i].length;
    const lengthDiffer2 = n - binaryArr2[i].length;

    if (binaryArr1[i].length !== n) {
      binaryArr1.splice(i, 1, '0'.repeat(lengthDiffer1) + binaryArr1[i]);
    }

    if (binaryArr2[i].length !== n) {
      binaryArr2.splice(i, 1, '0'.repeat(lengthDiffer2) + binaryArr2[i]);
    }

    for (let j = 0; j < n; j++) {
      const sum = Number(binaryArr1[i][j]) + Number(binaryArr2[i][j]);

      if (sum === 2 || sum === 1) {
        secret += '#';
      } else {
        secret += ' ';
      }
    }

    result.push(secret);
    secret = '';
  }

  return result;
}
