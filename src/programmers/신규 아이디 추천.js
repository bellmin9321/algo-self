// my solution: ⭕️ Solved -> Hard coding
function solution(new_id) {
  new_id = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, '')
    .replace(/[.]+/g, '.');
  if (new_id[0] === '.') {
    new_id = new_id.slice(1);
  }

  if (new_id[new_id.length - 1] === '.') {
    new_id = new_id.slice(0, -1);
  }

  if (new_id === '') {
    new_id = 'a';
  }

  if (new_id.length > 15) {
    new_id = new_id.slice(0, 15);

    if (new_id[new_id.length - 1] === '.') {
      new_id = new_id.slice(0, -1);
    }
  } else if (new_id.length <= 2) {
    new_id = new_id.padEnd(3, new_id[new_id.length - 1]);
  }

  return new_id;
}

// best
function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, '') // 2
    .replace(/\.+/g, '.') // 3
    .replace(/^\.|\.$/g, '') // 4
    .replace(/^$/, 'a') // 5
    .slice(0, 15)
    .replace(/\.$/, ''); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

// 2nd
const solution = new_id => {
  const id = new_id
    .toLowerCase()
    .replace(/[^\w\d-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .padEnd(1, 'a')
    .slice(0, 15)
    .replace(/^\.|\.$/g, '');
  return id.padEnd(3, id[id.length - 1]);
};

// 3rd
const solution = new_id =>
  new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .match(/^.{0,14}[^.]/)[0]
    .replace(/^(.)$/, '$1$1$1')
    .replace(/^(.)(.)$/, '$1$2$2');
