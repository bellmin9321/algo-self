function solution(n) {
  const binary = n.toString(2);
  const oneCount = binary.match(/1/g).length;
  let nextNum = n;
  let oneCount2; 
  
  while (oneCount !== oneCount2) {     
      nextNum++;
      oneCount2 = nextNum.toString(2).match(/1/g).length;
  }
  
  return nextNum;
}
