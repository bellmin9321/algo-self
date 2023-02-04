function solution(sizes) {
  const oneDimArr = sizes.reduce((acc, cur) => acc.concat(cur));
  const maxNum = Math.max(...oneDimArr);

  const minArr = sizes.map((v, i) => Math.min(...v));
  const maxNumInMinArr = Math.max(...minArr);

  return maxNum * maxNumInMinArr;
}
