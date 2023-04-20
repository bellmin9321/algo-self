const solution = (n) => {
  // 아래 계산의 결과값은 항상 9의 배수가 나오므로 100 이하면 return 'apple' 
  // n이 100보다 클 경우 재귀를 이용해 수를 깎으면서 100이하 수로 만들어 return 'apple'
  n -= [...`${n}`].reduce((a, b) => a + b * 1, 0);

  return n > 100 ? solution(n) : 'apple';
}



const solution2 = (n) => {
  // 아래 계산의 결과값은 항상 9의 배수가 나오므로 9로 나눈 나머지가 0이면 'apple'을 return 하면됨
  n -= [...`${n}`].reduce((a, b) => a + b * 1, 0);

  return n % 9 === 0 ? 'apple' : 'Absolutely no other value below 10000'
}


// 다른 풀이: 재귀 이용 && fruits 객체 선언해서 푼 풀이
const bar = (n) => {
  n -= [...`${n}`].reduce((a, b) => a + b * 1, 0);
  
  if (n <= 100) {
    return fruits[n];
  } else {
    return bar(n);
  }
}

/*
각 자리의 숫자를 더한값을 원래 숫자에서 빼고 결과가 하단에 나열한 과일코드가 나올때까지 계산하는 코드를 작성해주세요.
**예시**

- ex) 10 => 10 - (1+0) = 9 ⇒ apple
- ex) 325 =>
    - 325 - (3+2+5) = 315
    - 315 - (3+1+5) = 306
    - 306 - (3+0+6) = 297
    - ...

**주의할점**

- 10~10000 사이의 숫자를 입력합니다.

과일
1: 'kiwi',
2: 'pear',
3: 'kiwi',
4: 'banana',
5: 'melon',
6: 'banana',
7: 'melon',
8: 'pineapple',
9: 'apple',
10: 'pineapple',
11: 'cucumber',
12: 'pineapple',
13: 'cucumber',
14: 'orange',
15: 'grape',
16: 'orange',
17: 'grape',
18: 'apple',
19: 'grape',
20: 'cherry',
21: 'pear',
22: 'cherry',
23: 'pear',
24: 'kiwi',
25: 'banana',
26: 'kiwi',
27: 'apple',
28: 'melon',
29: 'banana',
30: 'melon',
31: 'pineapple',
32: 'melon',
33: 'pineapple',
34: 'cucumber',
35: 'orange',
36: 'apple',
37: 'orange',
38: 'grape',
39: 'orange',
40: 'grape',
41: 'cherry',
42: 'pear',
43: 'cherry',
44: 'pear',
45: 'apple',
46: 'pear',
47: 'kiwi',
48: 'banana',
49: 'kiwi',
50: 'banana',
51: 'melon',
52: 'pineapple',
53: 'melon',
54: 'apple',
55: 'cucumber',
56: 'pineapple',
57: 'cucumber',
58: 'orange',
59: 'cucumber',
60: 'orange',
61: 'grape',
62: 'cherry',
63: 'apple',
64: 'cherry',
65: 'pear',
66: 'cherry',
67: 'pear',
68: 'kiwi',
69: 'pear',
70: 'kiwi',
71: 'banana',
72: 'apple',
73: 'banana',
74: 'melon',
75: 'pineapple',
76: 'melon',
77: 'pineapple',
78: 'cucumber',
79: 'pineapple',
80: 'cucumber',
81: 'apple',
82: 'grape',
83: 'orange',
84: 'grape',
85: 'cherry',
86: 'grape',
87: 'cherry',
88: 'pear',
89: 'cherry',
90: 'apple',
91: 'kiwi',
92: 'banana',
93: 'kiwi',
94: 'banana',
95: 'melon',
96: 'banana',
97: 'melon',
98: 'pineapple',
99: 'apple',
100: 'pineapple'
*/
