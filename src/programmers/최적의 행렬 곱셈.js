// my solution
function solution(matrix_sizes) {
  let ans = [];
  
  for (let i = 0; i < matrix_sizes.length; i++) {
      const copy = [...matrix_sizes];
      let sum = 0;
      
      while (copy.length > 1) {
          const [v, t] = copy[i];
          const targetIdx = copy.findIndex(v => v[0] === t);
          if (targetIdx < 0) {
              i--;
          }
          sum += v * t * copy[targetIdx][1];
          copy[i][1] = copy[targetIdx][1];
          copy.splice(targetIdx, 1);
          console.log(targetIdx, copy[targetIdx], copy)
      }
      if (sum === 0) continue;
      ans.push(sum);
  }
  
  return Math.min(...ans);
}