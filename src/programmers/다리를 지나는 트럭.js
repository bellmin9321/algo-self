// my solution: ❌ NotSolved
function solution(bridge_length, weight, truck_weights) {
  if (truck_weights.length === 1) return bridge_length + truck_weights.length;
  let ans = 1;
  let count = bridge_length;
  const q = [truck_weights.shift()];

  while (q.length) {
    const sum = q.reduce((a, b) => a + b);

    if (sum + truck_weights[0] <= weight) {
      q.push(truck_weights.shift());
      ans++;
      count--;
    }

    ans++;
    count--;
    if (count === 0) {
      q.shift();
      count = bridge_length;
      if (!truck_weights.length) break;
      q.push(truck_weights.shift());
    }
  }

  return ans + q.length;
}

// best
function solution(bridge_length, weight, truck_weights) {
  // '다리'를 모방한 큐에 간단한 배열로 정리 : [트럭무게, 얘가 나갈 시간].
  let time = 0,
    q = [[0, 0]],
    weightOnBridge = 0;

  // 대기 트럭, 다리를 건너는 트럭이 모두 0일 때 까지 다음 루프 반복
  while (q.length > 0 || truck_weights.length > 0) {
    // 1. 현재 시간이, 큐 맨 앞의 차의 '나갈 시간'과 같다면 내보내주고,
    //    다리 위 트럭 무게 합에서 빼준다.
    if (q[0][1] === time) weightOnBridge -= q.shift()[0];

    if (weightOnBridge + truck_weights[0] <= weight) {
      // 2. 다리 위 트럭 무게 합 + 대기중인 트럭의 첫 무게가 감당 무게 이하면
      //    다리 위 트럭 무게 업데이트, 큐 뒤에 [트럭무게, 이 트럭이 나갈 시간] 추가.
      weightOnBridge += truck_weights[0];
      q.push([truck_weights.shift(), time + bridge_length]);
    } else {
      // 3. 다음 트럭이 못올라오는 상황이면 얼른 큐의
      //    첫번째 트럭이 빠지도록 그 시간으로 점프한다.
      //    참고: if 밖에서 1 더하기 때문에 -1 해줌
      if (q[0]) time = q[0][1] - 1;
    }
    // 시간 업데이트 해준다.
    time++;
  }

  return time;
}

// 2nd
const solution = (bridgeLength, weight, truckWeights) => {
  const progress = [];
  let i = 1;
  while (true) {
    progress.map((item, j) => {
      if (item.end === i) progress.splice(j, 1);
    });

    if (
      progress.reduce((p, c) => p + c.weight, 0) + truckWeights[0] <=
      weight
    ) {
      progress.push({ end: i + bridgeLength, weight: truckWeights.shift() });
    }

    if (!progress.length && !truckWeights.length) break;
    i += 1;
  }

  return i;
};

// 3rd
function Node(firstData) {
  this.data = firstData;
  this.prev = null;
  this.next = null;
}

// first out last in
function Queue() {
  this.first = null;
  this.last = null;

  this.enqueue = function (node) {
    if (this.first === null) {
      this.first = node;
      this.first.next = node;
      this.last = node;
      this.last.prev = node;
    } else if (this.first === this.last) {
      this.first.prev = null;
      this.first.next = node;
      this.last = node;
      this.last.prev = this.first;
      this.last.next = null;
    } else if (this.last !== null) {
      var temp = this.last;
      temp.next = node;
      this.last = node;
      this.last.prev = temp;
    }
  };

  this.dequeue = function () {
    var returnValue = this.first.data;

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else if (this.first !== this.last) {
      this.first = this.first.next;
    }

    return returnValue;
  };

  this.length = function () {
    if (this.first === null) return 0;
    else if (this.first === this.last) {
      return 1;
    } else if (this.first !== this.last) {
      var count = 1,
        node = this.first;

      while (node.next !== null) {
        node = node.next;
        count++;
      }

      return count;
    }
  };

  this.sum = function () {
    if (this.first === null) return 0;
    else if (this.first === this.last) {
      return this.first.data;
    } else if (this.first !== this.last) {
      var count = this.first.data !== -1 ? this.first.data : 0, // 이 문제에 맞게 추가함
        node = this.first;

      while (node.next !== null) {
        node = node.next;
        if (node.data !== -1)
          // 이 문제에 맞게 추가한 조건문
          count += node.data;
      }

      return count;
    }
  };
}

function solution(bridge_length, weight, truck_weights) {
  var answer = 0,
    truck_length = truck_weights.length,
    q = new Queue(),
    end = 0;

  var i = 0;
  for (; i < bridge_length; i++) q.enqueue(new Node(-1));

  while (end !== truck_length) {
    // move truck
    answer++;
    end += q.dequeue() !== -1 ? 1 : 0;

    // add truck
    q.enqueue(
      new Node(
        q.sum() + truck_weights[0] <= weight ? truck_weights.shift() : -1,
      ),
    );
  }

  return answer;
}
