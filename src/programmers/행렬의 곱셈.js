// 내 풀이: 못 풀었지만 2중 for문에서 arr1[i]를 arr2[0]으로 바꾸면 됐음
// 행렬 곱셈에 대한 개념이 없어서 저러 사소한 실수였지만, 결국 풀지 못하는 결과를 초래함
function solution(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    const temp = [];

    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;

      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }

      temp.push(sum);
    }

    answer.push(temp);
  }

  return answer;
}
