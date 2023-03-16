function solution(record) {
  const ans = [];
  const cache = {};

  for (let str of record) {
    const [command, uid, nickname] = str.split(' ');

    if (command === 'Change') {
      cache[uid] = nickname;
      continue;
    }
    const convertToKR = command === 'Enter' ? '들어왔습니다.' : '나갔습니다.';

    cache[uid] = nickname ? nickname : cache[uid];
    ans.push(`${uid}님이 ${convertToKR}`);
  }
  return ans.map(str =>
    str.replace(str.split('님')[0], cache[str.split('님')[0]]),
  );
}

// best
function solution(record) {
  const userInfo = {};
  const action = [];
  const stateMapping = {
    Enter: '님이 들어왔습니다.',
    Leave: '님이 나갔습니다.',
  };

  record.forEach(v => {
    const [state, id, nick] = v.split(' ');

    if (state !== 'Change') {
      action.push([state, id]);
    }

    if (nick) {
      userInfo[id] = nick;
    }
  });

  return action.map(([state, uid]) => {
    return `${userInfo[uid]}${stateMapping[state]}`;
  });
}

// 2nd
function solution(record) {
  let ret = [];
  const uids = new Map();

  record.forEach(entry => {
    let [command, uid, nick] = entry.split(' ');
    if (command === 'Enter' || command === 'Change') uids.set(uid, nick);
  });

  record.forEach(entry => {
    let [command, uid] = entry.split(' ');
    if (command === 'Enter') ret.push(`${uids.get(uid)}님이 들어왔습니다.`);
    if (command === 'Leave') ret.push(`${uids.get(uid)}님이 나갔습니다.`);
  });

  return ret;
}
