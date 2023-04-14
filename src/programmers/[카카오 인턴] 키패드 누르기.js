// my solution: ⭕️ Solved -> grid & cache 사용
function solution(numbers, hand) {
  let ans = '';
  // *, # 도 필요하므로 객체로 만들어야할듯
  // ex const phone = { '*': [3, 0], '#': [3, 2] ...}
  // 근데 배열로 할거면 *, # 를 맨 끝에 두고 left, right 초기값을 index(10, 11)로 주면 해결!
  const phone = [
    [3, 1],
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
    [3, 0],
    [3, 2],
  ];
  const cache = {
    1: 'L',
    4: 'L',
    7: 'L',
    3: 'R',
    6: 'R',
    9: 'R',
  };
  let left = 10;
  let right = 11;

  for (const num of numbers) {
    if (cache[num]) {
      ans += cache[num];
      cache[num] === 'L' ? (left = num) : (right = num);
    } else {
      const lD =
        Math.abs(phone[num][0] - phone[left][0]) +
        Math.abs(phone[num][1] - phone[left][1]);
      const rD =
        Math.abs(phone[num][0] - phone[right][0]) +
        Math.abs(phone[num][1] - phone[right][1]);

      if (lD === rD) {
        ans += hand[0].toUpperCase();
        hand === 'left' ? (left = num) : (right = num);
        continue;
      }
      ans += lD > rD ? 'R' : 'L';
      lD > rD ? (right = num) : (left = num);
    }
  }

  return ans;
}

// best
function solution(numbers, hand) {
  hand = hand[0] === 'r' ? 'R' : 'L';
  let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2];
  let h = { L: [1, 1], R: [1, 1] };
  return numbers
    .map(x => {
      if (/[147]/.test(x)) {
        h.L = [position[x], 1];
        return 'L';
      }
      if (/[369]/.test(x)) {
        h.R = [position[x], 1];
        return 'R';
      }
      let distL = Math.abs(position[x] - h.L[0]) + h.L[1];
      let distR = Math.abs(position[x] - h.R[0]) + h.R[1];
      if (distL === distR) {
        h[hand] = [position[x], 0];
        return hand;
      }
      if (distL < distR) {
        h.L = [position[x], 0];
        return 'L';
      }
      h.R = [position[x], 0];
      return 'R';
    })
    .join('');
}

// 2nd
const solution = (numbers, hand) => {
  const answer = [];

  let leftHandPosition = '*';
  let rightHandPosition = '#';

  numbers.forEach(number => {
    if (number === 1 || number === 4 || number === 7) {
      answer.push('L');
      leftHandPosition = number;
      return;
    }

    if (number === 3 || number === 6 || number === 9) {
      answer.push('R');
      rightHandPosition = number;
      return;
    }

    const leftHandDistance = getDistance(leftHandPosition, number);
    const rightHandDistance = getDistance(rightHandPosition, number);

    if (leftHandDistance === rightHandDistance) {
      if (hand === 'right') {
        answer.push('R');
        rightHandPosition = number;
        return;
      }

      if (hand === 'left') {
        answer.push('L');
        leftHandPosition = number;
        return;
      }
    }

    if (leftHandDistance > rightHandDistance) {
      answer.push('R');
      rightHandPosition = number;
    }

    if (leftHandDistance < rightHandDistance) {
      answer.push('L');
      leftHandPosition = number;
    }
  });

  return answer.join('');
};

const getDistance = (locatedNumber, target) => {
  const keyPad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  const nowPosition = keyPad[locatedNumber];
  const targetPosition = keyPad[target];

  return (
    Math.abs(targetPosition[0] - nowPosition[0]) +
    Math.abs(targetPosition[1] - nowPosition[1])
  );
};
