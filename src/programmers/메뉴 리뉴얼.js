// my solution: ❌ NotSolved -> 접근 X
function solution(orders, courses) {
  const answer = [];

  orders = orders.map(v => v.split(''));

  for (let i = 0; i < courses.length; i++) {
    const course = courses[i];
    const results = [];

    orders.forEach((order, index) => {
      getCombis(order, course).forEach(v => {
        const result = v.sort().join('');

        results[result] ? results[result]++ : (results = 1);
      });
    });

    if (Object.keys(results).length < 2) continue;

    const max = Object.keys(results).reduce(
      (a, b) => (results[a] >= results[b] ? a : b),
      0,
    );

    if (results[max] < 2) continue;

    answer.push(max);
    Object.keys(results).forEach(key => {
      if (key !== max && results[key] === results[max]) answer.push(key);
    });
  }

  return answer.sort();
}

function getCombis(arr, nums) {
  if (nums === 1) return arr.map(v => [v]);

  const results = {};

  arr.forEach((fixed, index, origin) => {
    const rest = origin.splice(index + 1);
    const combis = getCombis(rest, nums - 1);
    const attached = combis.map(v => [fixed, ...v]);

    results.push(...attached);
  });

  return results;
}

// Try2
function solution(orders, courses) {
  const cache = {};

  orders.forEach((order, _, arr) => {
    let count = 0;

    arr.forEach(v => {
      if ([...order].every(l => v.includes(l))) count++;
    });

    cache[order] = count;
  });
  // console.log(cache)
  const filtered = Object.entries(cache).filter(([k, v]) => v !== 1);
  console.log(filtered);
}

// best
function solution(orders, course) {
  const ordered = {};
  const candidates = {};
  const maxNum = Array(10 + 1).fill(0);
  const createSet = (arr, start, len, foods) => {
    if (len === 0) {
      ordered[foods] = (ordered[foods] || 0) + 1;
      if (ordered[foods] > 1) candidates[foods] = ordered[foods];
      maxNum[foods.length] = Math.max(maxNum[foods.length], ordered[foods]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      createSet(arr, i + 1, len - 1, foods + arr[i]);
    }
  };

  orders.forEach(od => {
    // arr.sort는 기본적으로 사전식 배열
    const sorted = od.split('').sort();
    // 주문한 음식을 사전순으로 배열해서 문자열을 만든다.
    // course에 있는 길이만 만들면 된다.
    course.forEach(len => {
      createSet(sorted, 0, len, '');
    });
  });

  const launched = Object.keys(candidates).filter(
    food => maxNum[food.length] === candidates[food],
  );

  return launched.sort();
}

// 2nd
function looper(menu, max, startIndex = 0, cur = 0, str = '') {
  if (menu.length < max) return [];
  if (menu.length === max) return [menu];

  let fullList = [];
  if (max === cur + 1) {
    let ans = [];
    for (let j = startIndex; j < menu.length - max + 1 + cur; j++) {
      ans.push(str + menu[j]);
    }
    return ans;
  } else {
    for (let i = startIndex; i < menu.length - max + 1 + cur; i++) {
      fullList = fullList.concat(
        looper(menu, max, i + 1, cur + 1, str + menu[i]),
      );
    }
  }

  return fullList;
}

function solution(orders, course) {
  let answer = [];
  course.forEach(n => {
    var cands = {};
    orders.forEach(order => {
      looper(order, n).forEach(candidateList => {
        let sortedText = candidateList.split('').sort().join('');
        cands[sortedText] = ++cands[sortedText] || 1;
      });
    });

    let biggest = 2, //ignore menus less than 2
      list = [];

    for (const prop in cands) {
      if (cands[prop] > biggest) {
        list = [prop];
        biggest = cands[prop];
      } else if (cands[prop] === biggest) {
        list.push(prop);
      }
    }
    answer = answer.concat(list);
  });

  return answer.sort();
}

// blog
function solution(orders, courses) {
  const ans = [];
  const cache = {};

  courses.forEach(num => {
    orders.forEach(order => {
      const coms = combination([...order], num).map(arr => {
        const word = arr.sort().join('');
        cache[word] = (cache[word] || 0) + 1;
      });
    });
  });

  courses.forEach(num => {
    const numLength = Object.entries(cache).filter(
      v => v[0].length === num && v[1] !== 1,
    );
    const max = Math.max(...numLength.map(arr => arr[1]));
    ans.push(...numLength.filter(v => v[1] === max).map(arr => arr[0]));
  });

  return ans.sort();
}

function combination(arr, num) {
  const result = [];
  if (num === 1) return arr.map(el => [el]);

  arr.forEach((fix, idx, array) => {
    const restArray = array.slice(idx + 1);
    const combiArr = combination(restArray, num - 1);
    const combiFix = combiArr.map(el => [fix, ...el]);

    result.push(...combiFix);
  });

  return result;
}
