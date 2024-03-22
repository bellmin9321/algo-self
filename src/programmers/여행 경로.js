// ❌ NotSolved(1h20m): 기본(1/2), 전체(2/4) 통과
function solution(tickets) {
  const ans = [];
  let arr = ['ICN'];
  let temp = [...tickets];
  
  function dfs(path) {
      if (arr.length === tickets.length + 1) {
          ans.push(arr);
          arr = ['ICN'];
          // temp = [...tickets];
      }
      
      for (let i = 0; i < temp.length; i++) {
          const [start, end] = temp[i];
          
          if (start === path) {
              arr.push(end);
              temp.splice(i, 1)
              dfs(end);
          }
      }
  }
  
  dfs('ICN');
  
  return ans.sort()[0]
}

// best
function solution(tickets) {
  let answer = [];
  
  function DFS(t, s, p){
      if (t.length == 0) {
          answer.push(p);
      }
      
      for (let i = 0; i < t.length; i++) {
          const [start, e] = t[i];
          
          if (s == start) {
              let tmp = t.slice();
              tmp.splice(i,1);
              
              let tmp2 = [...p]
              tmp2.push(e);
              
              DFS(tmp, e, tmp2)
          }
      }
  }
  
  DFS(tickets, 'ICN', ["ICN"]);
  
  return answer.sort()[0];
}