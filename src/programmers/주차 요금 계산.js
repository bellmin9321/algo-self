// my solution
function solution(fees, records) {
  const [time, fee, unitTime, unitFee] = fees;
  const cache = {};
  
  for (let i = 0; i < records.length; i++) {
      const [time, number, IO] = records[i].split(' ');
      const sum = time.slice(0, 2) * 60 + +time.slice(-2);
      
      if (cache[number]) {
          cache[number].push(sum)
      } else {
          cache[number] = [sum];
      }
  }
  const arr = Object.entries(cache).map(([num, arr]) => {
      let pTime = 0;
      for (let i = 0; i < arr.length; i += 2) {
          pTime += (arr[i + 1] ? +arr[i + 1] : 1439) - +arr[i]
      }
      const overTime = pTime - time > 0 ? pTime - time : 0
      return [num, fee + Math.ceil(overTime / unitTime) * unitFee];
  });
  
  arr.sort((a, b) => +a[0] - +b[0]);
  return arr.map(([_, sum]) => sum);
}