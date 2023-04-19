/*
입력된 문장을 영문 기준으로 한줄에 최대 80글자를 출력하고 줄바꿈(`\n`) 하는 코드를 작성해주세요.
- 한글은 영문 2글자로 인식합니다.

**예시**

- 입력
이 글은 도커에 대해 1도 모르는 시스템 관리자나 서버 개발자를 대상으로 도커 전반에 대해 얕고 넓은 지식을 담고 있습니다. 도커가 등장한 배경과 도커의 역사, 그리고 도커의 핵심 개념인 컨테이너와 이미지에 대해 알아보고 실제로 도커를 설치하고 컨테이너를 실행해 보도록 하겠습니다.

- 출력
이 글은 도커에 대해 1도 모르는 시스템 관리자나 서버 개발자를 대상으로 도커 전반
에 대해 얕고 넓은 지식을 담고 있습니다. 도커가 등장한 배경과 도커의 역사, 그리고
도커의 핵심 개념인 컨테이너와 이미지에 대해 알아보고 실제로 도커를 설치하고 컨테
이너를 실행해 보도록 하겠습니다.

**주의할점**
- 영문기준 최대 80자로 한글이 포함된 경우 79자까지 표현할 수 있습니다. (81자 X)
- 새로운 줄의 첫글자는 빈칸이 될 수 없습니다.
- 구글에서 “한글입숨”으로 검색하여 테스트 문장을 생성할 수 있습니다.
*/

const foo = (str) => {
  let ans = '';
  let sum = 0;
  let isKrIncluded = false;

  const checkKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  for (let i = 0; i < str.length; i++) {
    if (sum === 0 && str[i] === ' ') continue;
    
    if (checkKorean.test(str[i])) {
      sum += 2;
      isKrIncluded = true;
    } else {
      sum++;
    }

    ans += str[i];

    if (isKrIncluded) {
      if (sum >= 79) {
        isKrIncluded = false;
        sum = 0;
        ans += '\n';
      }
    } else {
      if (sum >= 80) {
        sum = 0;
        ans += '\n';
      }
    }
  }

  return ans;
}
