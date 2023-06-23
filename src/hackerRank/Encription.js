// my solution: ❌ NotSolved(10/13 passed / 1h10min)
function encryption(s) {
  let notBlanked = s.split(' ').join('');
  let length = notBlanked.length;
  let row = Math.floor(Math.pow(length, 1 / 2));
  let col = row + 1;

  if (row * col < length) row++;
  let strs = [];
  let ans = [];

  while (notBlanked.length) {
    strs.push(notBlanked.slice(0, col));
    notBlanked = notBlanked.slice(col);
  }

  for (let i = 0; i < col; i++) {
    let encrypt = '';

    for (let j = 0; j < row; j++) {
      encrypt += strs[j][i] ? strs[j][i] : '';
    }

    ans.push(encrypt);
  }

  return ans.join(' ');
}

// best
function encryption(s) {
  s = s.replace(/ /g, '');
  let len = s.length;
  let rs = '';

  const cols = Math.ceil(Math.sqrt(len));

  for (let i = 0; i < cols; i++) {
    for (let j = i; j < len; j = j + cols) rs += s[j];
    rs += ' ';
  }

  return rs;
}

// 2nd
function encryption(s) {
  s = s.replace(' ', '');
  const len = s.length;
  const sqrt = Math.sqrt(len);
  const col = Math.ceil(sqrt);
  let m = '';

  for (let i = 0; i < col; i++) {
    if (m) {
      m += ' ';
    }
    for (let j = i; j < len; j += col) {
      m += s[j];
    }
  }

  return m;
}

// 3rd
function encryption(s) {
  // First remove spaces and separate the letters.
  s = s.trim().split(/\s+/g).join('').split('');
  let length = Math.sqrt(s.length);
  let rows = Math.floor(length);
  let columns = Math.ceil(length);
  let words = new Array();
  let encrypt = [];
  //Because of the condition rows * columns >= L.
  if (rows * columns < s.length) {
    rows = columns;
  }
  //Separate the letters in columns length (splice) and push them into words array.
  while (words.length < rows) {
    words.push(s.splice(0, columns));
  }
  //In every row remove the first letter and push it into encrypt. (I tried to use an empty string with concat, but It didn't work :( ).
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      encrypt.push(words[j].shift());
    }
    //Every time a word is complete, add a space.
    encrypt.push(' ');
  }
  //Join the letters into words.
  return encrypt.join('');
}
