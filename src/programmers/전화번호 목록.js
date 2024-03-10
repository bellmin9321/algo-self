// ❌ NotSolved: 효율성 테스트 (2/4) 실패
function solution(phone_book) {
  for (let i = 0; i <= phone_book.length - 1; i++) {
    const target = phone_book[i];

    for (let j = 0; j <= phone_book.length - 1; j++) {
      if (i === j) continue;

      const prefixIndex = phone_book[j].indexOf(target);

      if (prefixIndex === 0) {
        return false;
      }
    }
  }

  return true;
}
