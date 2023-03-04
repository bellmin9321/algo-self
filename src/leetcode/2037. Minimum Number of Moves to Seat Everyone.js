// my solution: ❌ NotSolved -> 기본 테스트만 통과
var minMovesToSeat = function (seats, students) {
  const filtered = seats.filter(v => students.includes(v));
  const intersction = [...new Set(filtered)];

  for (let i = 0; i < intersction.length; i++) {
    const seatIndex = seats.indexOf(intersction[i]);
    const studIndex = students.indexOf(intersction[i]);
    seats.splice(seatIndex, 1);
    students.splice(studIndex, 1);
  }

  seats.sort((a, b) => a - b);
  let ans = 0;

  for (let i = 0; i < students.length; i++) {
    if (seats.length === 0) break;
    let diffs = [];

    for (let j = 0; j < seats.length; j++) {
      diffs.push(Math.abs(students[i] - seats[j]));
    }

    const min = Math.min(...diffs);
    ans += min;
    const targetIndex = diffs.indexOf(min);
    seats.splice(targetIndex, 1);
  }

  return ans;
};

// best
var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => {
    return a - b;
  });
  students.sort((a, b) => {
    return a - b;
  });
  return seats.reduce((a, b, i) => (a += Math.abs(seats[i] - students[i])), 0);
};

// best2
var minMovesToSeat = function (seats, students) {
  students.sort((a, b) => {
    return a - b;
  });
  return seats
    .sort((a, b) => {
      return a - b;
    })
    .reduce((a, b, i) => (a += Math.abs(seats[i] - students[i])), 0);
};
