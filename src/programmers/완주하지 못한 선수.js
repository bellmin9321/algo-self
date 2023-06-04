// 2번째 풀이: ⭕️ Solved(30min)
function solution(participant, completion) {
  const map = {};

  participant.forEach(c => (map[c] = (map[c] || 0) + 1));
  completion.forEach(c => map[c]--);

  for (let name in map) {
    if (map[name]) return name;
  }
}

// my solution
function solution(participant, completion) {
  const cache = {};

  for (let p of participant) {
    cache[p] = (cache[p] || 0) + 1;
  }

  for (let c of completion) {
    cache[c] = (cache[c] || 0) - 1;
  }

  return Object.entries(cache).filter(([k, v]) => v === 1)[0][0];
}

// best
var solution = (participant, completion) =>
  participant.find(
    participant => !completion[participant]--,
    completion.map(
      participant =>
        (completion[participant] = (completion[participant] | 0) + 1),
    ),
  );

// 2nd
function solution(participant, completion) {
  /*
  for(let i in participant) {
      if(completion.includes(participant[i]) == false) return participant[i];
      completion.splice(completion.indexOf(participant[i]), 1);
  }
  */

  participant.sort();
  completion.sort();

  for (let i in participant) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

// 3rd
function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return 'nothing';
}

// 4th
function solution(participant, completion) {
  var dic = completion.reduce(
    (obj, t) => ((obj[t] = obj[t] ? obj[t] + 1 : 1), obj),
    {},
  );

  return participant.find(t => {
    if (dic[t]) dic[t] = dic[t] - 1;
    else return true;
  });
}

// 5th
const solution = (p, c) => {
  p.sort();
  c.sort();

  while (p.length) {
    let pp = p.pop();
    if (pp !== c.pop()) return pp;
  }
};
