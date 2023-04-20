/*
이름이 4글자면 친구입니다. 친구를 찾는 함수를 작성해주세요.

**예시**

- ex) ["Ryan", "Kieran", "Mark"] => ["Ryan", "Mark"]

**주의할점**

- 입력받은 순서를 유지해서 출력해주세요.
*/
const foo = (users) => {
  let ans = [];

  for (const user of users) {
    if (user.length === 4) ans.push(user);
  }

  return ans;
}

// 다른 풀이
const bar = (users) => {
  return users.filter(user => user.length === 4);
}
