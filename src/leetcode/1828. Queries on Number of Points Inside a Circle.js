// 내 풀이 : ❌ NotSolved: 못 푼 문제
var countPoints = function (points, queries) {
  const answer = [];

  queries.map((query, i) => {
    let count = 0;

    points.map((point, j) => {
      if (
        Math.abs(query[0] - point[0]) <= query[2] &&
        Math.abs(query[1] - point[1]) <= query[2]
      ) {
        count++;
      }

      if (i === queries.length - 1 && j === points.length - 1) count--;
    });

    answer.push(count);
  });

  return answer; // answer 의 요소는 그 안에 point의 개 수
};

// Best solution
function countPoints(points, queries) {
  // For each query, check all points and calculate
  // number of points having distance <= radius.
  return queries.map(([qx, qy, qr]) => {
    return points.reduce((acc, [px, py]) => {
      if (isInside(px, py, qx, qy, qr)) ++acc;
      return acc;
    }, 0);
  });
}

function isInside(px, py, cx, cy, radius) {
  return distance(px, py, cx, cy) <= radius;
}

// Euclidean distance
// https://en.wikipedia.org/wiki/Euclidean_distance#Two_dimensions
function distance(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

// 2nd solution
const countPoints = function (points, queries) {
  let result = [];

  for (let [x, y, radius] of queries) {
    let count = 0;
    for (let [a, b] of points) {
      count += (x - a) * (x - a) + (y - b) * (y - b) <= radius * radius ? 1 : 0;
    }
    result.push(count);
  }
  return result;
};

// 3rd solution
var countPoints = function (points, queries) {
  let arr = [];
  for (let i = 0; i < queries.length; i++) {
    let count = 0;
    for (let j = 0; j < points.length; j++) {
      let x = Math.pow(points[j][0] - queries[i][0], 2);
      let y = Math.pow(points[j][1] - queries[i][1], 2);
      let radius = Math.pow(queries[i][2], 2);
      if (x + y <= radius) {
        count++;
      }
    }
    arr.push(count);
  }
  return arr;
};
