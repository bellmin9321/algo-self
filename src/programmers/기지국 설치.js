// ❌ NotSolved(1h) -> 기본 테스트 (16/21) 통과, 시간 초과 및 해결책 x
// my solution1
function solution(n, stations, w) {
  let ans = 0;
  let totalStations = Array(n)
    .fill()
    .map((_, i) => i + 1);

  for (let i = 0; i < stations.length; i++) {
    const station = stations[i];

    totalStations = totalStations.filter(v => {
      return !(station - w <= v && v <= station + w);
    });
  }

  let count = 0;

  for (let i = 0; i < totalStations.length - 1; i++) {
    let j = i + 1;
    const width = w * 2 + 1;

    const before = totalStations[i];
    const after = totalStations[j];

    if (after - before === 1) {
      count++;

      if (count === width) {
        ans++;
        count = 0;

        if (j === totalStations.length - 1) {
          break;
        }
      }

      if (j === totalStations.length - 1) {
        ans++;
        break;
      }

      continue;
    }

    ans++;
  }

  return ans;
}

// best
function solution(n, stations, w) {
  let ans = 0;
  let startIndex = 0;
  const width = w * 2 + 1;

  for (let i = 0; i < stations.length; i++) {
    const station = stations[i];
    let endIndex = station - w - 1;

    ans += Math.ceil((endIndex - startIndex) / width);
    startIndex = station + w;
  }

  ans += Math.ceil((n - startIndex) / width);

  return ans;
}

// best2
function solution(n, stations, w) {
  let c = 0;
  let m = 0;
  const size = w * 2 + 1;

  for (const s of stations) {
    c += Math.ceil((s - w - m - 1) / size);
    m = s + w;
  }

  c += Math.ceil((n - m) / size);

  return c;
}
