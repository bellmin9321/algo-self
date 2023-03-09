// my soltuion: 소요 시간(약 1h30m)
// 'A'.charCodeAt() = '65', 'Z'.charCodeAt() = '90',
function solution(msg) {
  const ans = [];
  const cache = {};
  let start = 27;

  for (let i = 0; i < msg.length; i++) {
    if (msg[i + 1] === undefined) {
      ans.push(msg[i].charCodeAt() - 64);
      break;
    }

    const arr = Object.keys(cache).sort((a, b) => b.length - a.length);

    if (!arr.length) {
      cache[msg[i] + msg[i + 1]] = start++;
      ans.push(msg[i].charCodeAt() - 64);
      continue;
    }

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === msg.slice(i, i + arr[j].length)) {
        ans.push(cache[arr[j]]);
        cache[arr[j] + msg[i + arr[j].length]] = start++;
        i += arr[j].length - 1;
        break;
      }

      if (j === arr.length - 1) {
        cache[msg[i] + msg[i + 1]] = start++;
        ans.push(msg[i].charCodeAt() - 64);
      }
    }
  }

  return ans;
}

// best
function solution(msg) {
  let list = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  let dic = list.reduce((d, a, i) => ((d[a] = i + 1), d), {});

  let result = [];

  for (let i = 0; i < msg.length; i++) {
    let w = msg[i];
    let c = msg[i + 1];
    while (dic[w + c] && i < msg.length - 1) {
      i++;

      w = w + c;
      c = msg[i + 1];
    }

    result.push(dic[w]);

    list.push(dic[w + c]);
    dic[w + c] = list.length;
  }

  return result;
}

// 2nd
function solution(msg) {
  let answer = [],
    dictionary = [''].concat(
      [...Array(26).keys()].map(v => String.fromCharCode(v + 65)),
    );

  while (msg.length) {
    for (let i = dictionary.length - 1; i >= 0; i--) {
      let characters = dictionary[i];

      if (new RegExp('^' + characters).test(msg)) {
        let newCharacter = msg.substr(0, characters.length + 1);

        if (dictionary.indexOf(newCharacter) < 0) dictionary.push(newCharacter);

        msg = msg.substr(characters.length);
        answer.push(i);
        break;
      }
    }
  }

  return answer;
}

// 3rd
function solution(msg) {
  const dict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').reduce((dict, c, i) => {
    dict[c] = i + 1;
    return dict;
  }, {});
  dict.nextId = 27;
  const ans = [];
  for (let i = 0, j = 0; i < msg.length; i = j) {
    j = msg.length;
    let longest = '';
    while (dict[(longest = msg.substring(i, j))] === undefined) --j;
    ans.push(dict[longest]);
    dict[longest + msg[j]] = dict.nextId++;
  }

  return ans;
}
