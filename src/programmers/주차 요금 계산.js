// 2번째 풀이: ⭕️ Solved(30min) 23.05.15
function solution(fees, records) {
  const map = {};

  records.forEach(record => {
    const [time, number, type] = record.split(' ');
    const [h, m] = time.split(':');
    const totalMins = +h * 60 + +m;

    if (map[number]) map[number].push(totalMins);
    else map[number] = [totalMins];
  });

  const result = Object.entries(map)
    .sort((a, b) => a[0] - b[0])
    .map(([, arr]) => {
      const [defaultTime, defaultFee, perTime, perFee] = fees;
      if (arr.length % 2 === 1) {
        arr.push(1439);
      }
      const sum = arr.reduce((a, c, i) => (a += i % 2 === 1 ? c : -c), 0);
      if (sum <= defaultTime) return defaultFee;

      return defaultFee + Math.ceil((sum - defaultTime) / perTime) * perFee;
    });

  return result;
}

// my solution
function solution(fees, records) {
  const [time, fee, unitTime, unitFee] = fees;
  const cache = {};

  for (let i = 0; i < records.length; i++) {
    const [time, number, IO] = records[i].split(' ');
    const sum = time.slice(0, 2) * 60 + +time.slice(-2);

    if (cache[number]) {
      cache[number].push(sum);
    } else {
      cache[number] = [sum];
    }
  }
  const arr = Object.entries(cache).map(([num, arr]) => {
    let pTime = 0;
    for (let i = 0; i < arr.length; i += 2) {
      pTime += (arr[i + 1] ? +arr[i + 1] : 1439) - +arr[i];
    }
    const overTime = pTime - time > 0 ? pTime - time : 0;
    return [num, fee + Math.ceil(overTime / unitTime) * unitFee];
  });

  arr.sort((a, b) => +a[0] - +b[0]);
  return arr.map(([_, sum]) => sum);
}

// best
function solution(fees, records) {
  const parkingTime = {};
  records.forEach(r => {
    let [time, id, type] = r.split(' ');
    let [h, m] = time.split(':');
    time = h * 1 * 60 + m * 1;
    if (!parkingTime[id]) parkingTime[id] = 0;
    if (type === 'IN') parkingTime[id] += 1439 - time;
    if (type === 'OUT') parkingTime[id] -= 1439 - time;
  });
  const answer = [];
  for (let [car, time] of Object.entries(parkingTime)) {
    if (time <= fees[0]) time = fees[1];
    else time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1];
    answer.push([car, time]);
  }
  return answer.sort((a, b) => a[0] - b[0]).map(v => v[1]);
}
