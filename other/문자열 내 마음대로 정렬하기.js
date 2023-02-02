// 런타임 속도 최악이지만 기발한 문제풀이
function solution(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]),
  );
}

// charAt을 이용한 풀이
function solution(strings, n) {
  return strings.sort((a, b) => {
    const chr1 = a.charAt(n);
    const chr2 = b.charAt(n);

    if (chr1 == chr2) {
      // 이 부분이 이해가 안감
      return (a > b) - (a < b);
    } else {
      return (chr1 > chr2) - (chr1 < chr2);
    }
  });
}

// for문 2개를 이용해서 푼 풀이
function solution(strings, n) {
  const answer = [];

  for (let i = 0; i < strings.length; i++) {
    let alphabet = strings[i][n];
    strings[i] = alphabet + strings[i];
  }

  strings.sort();

  for (let j = 0; j < strings.length; j++) {
    strings[j] = strings[j].replace(strings[j][0], '');
    answer.push(strings[j]);
  }

  return answer;
}
