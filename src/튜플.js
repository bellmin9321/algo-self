// 내 풀이: 너무 지저분함 > 리팩토링 필요
function solution(s) {
  const answer = [];

  const slice = s.slice(2, s.length - 2).split('},{');
  const sortedByLength = slice.sort((a, b) => a.length - b.length);
  const sortedArr = sortedByLength.map(v => v.split(',').map(e => +e));
  const result = sortedArr.map(v => v.map(vv => +vv));

  for (let i = 0; i < result.length; i++) {
    let copied = [...answer].sort();

    if (!copied) answer.concat(result[i]);

    for (let j = 0; j < copied.length; j++) {
      while (result[i].indexOf(copied[j]) >= 0) {
        result[i].splice(result[i].indexOf(copied[j]), 1);
      }
    }

    answer.push(result[i][0]);
  }

  return answer;
}

// 1위 풀이
function solution(s) {
  return JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))
    .sort((a, b) => a.length - b.length)
    .reduce((arr, v, n) => {
      if (n) {
        return arr.concat(v.filter(f => !arr.includes(f)));
      }
      return v;
    }, []);
}

// 2위 풀이
const tupleFrom = str =>
  str
    .slice(2, -2)
    .split('},{')
    .map(it => toNumbers(it))
    .sort(accendingByLength)
    .reduce((acc, cur) => [...acc, ...cur.filter(it => !acc.includes(it))], []);

const toNumbers = str => str.split(',').map(it => Number(it));

const accendingByLength = (arr1, arr2) => arr1.length - arr2.length;

const solution = s => tupleFrom(s);

// 괜찮은 풀이
function solution(s) {
  let answer = [];
  // 집합의 사이즈가 1인 애가 맨 첫번째
  // 2인 애에서 1번째 원소를 빼면 걔가 두번째
  // 3인 애에서 2번원소를 빼면 걔가 3번째
  // n 사이즈 집합에서 n-1 사이즈 집합을 빼면 그 원소가 n번째 튜플의 원소
  // 문자열을 배열로 변경
  // 배열의 사이즈 순으로 정렬
  // n 배열의 원소와 n + 1 배열의 원소를 비교해서 남는 애를 임시 배열에 저장
  // 이걸 맨 끝까지 반복, 만약 배열의 마지막 원소일 경우 배열 사이즈도1 값도 1이므로 얘가 임시배열의 맨 첫번째여야함
  // 임시배열은 큐 형태로, 앞쪽부터 자료를 넣고 뒤쪽으로 민다.

  let newArr = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']')).sort(
    (a, b) => a.length - b.length,
  );

  let temp = [];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      temp.push(newArr[i][j]);
    }
  }
  answer = [...new Set(temp)];
  return answer;
}
