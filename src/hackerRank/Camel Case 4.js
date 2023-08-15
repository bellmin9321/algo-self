// my solution: ❌ NotSolved
function processData(input) {
  let ans = '';
  let inputArr = input.split('\r\n');
  let arr = [];

  for (let i = 0; i < inputArr.length; i++) {
    const [sc, mcv, word] = inputArr[i].split(';');

    if (sc === 'S') {
      [...word].forEach((v, i) => {
        if (v === v.toUpperCase() && i > 0) {
          ans += ' ' + v.toLowerCase();
        } else {
          ans += v.toLowerCase();
        }
      });

      arr.push(ans.replace('()', ''));
      ans = '';
    } else {
      const splitWords = word.split(' ');
      if (mcv === 'M') {
        const newWord = splitWords
          .map((word, i) => {
            if (i === 0) return word;

            word = word[0].toUpperCase() + word.slice(1);
            if (i === splitWords.length - 1) word += '()';

            return word;
          })
          .join('');

        arr.push(newWord);
      } else if (mcv === 'C') {
        const newWord = splitWords
          .map((word, i) => {
            word = word[0].toUpperCase() + word.slice(1);
            return word;
          })
          .join('');

        arr.push(newWord);
      } else {
        const newWord = splitWords
          .map((word, i) => {
            if (i === 0) return word;

            word = word[0].toUpperCase() + word.slice(1);
            return word;
          })
          .join('');

        arr.push(newWord);
      }
    }
  }

  return arr.join('\r\n');
}

// best
function splitOperation(input) {
  return input
    .replace(/[^\w]/g, '')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .toLowerCase();
}

function titleCase(input) {
  return `${input[0].toUpperCase()}${input.slice(1)}`;
}

function combineOperation(input, identifier) {
  if (identifier === 'M') {
    return combineOperation(input, 'V') + '()';
  }
  if (identifier === 'C') {
    return input
      .replace(/(\w+)/g, (_, word) => titleCase(word))
      .replace(/\s/g, '');
  }
  if (identifier === 'V') {
    return input
      .replace(/(\w+)/g, (_, word, offset) =>
        offset > 0 ? titleCase(word) : word,
      )
      .replace(/\s/g, '');
  }
  return input;
}

function processData(input) {
  const lines = input.split(/\r?\n/);

  lines.forEach(function (line) {
    const [operation, identifier, text] = line.split(/;/);

    if (operation === 'S') {
      console.log(splitOperation(text));
    }
    if (operation === 'C') {
      console.log(combineOperation(text, identifier));
    }
  });
}
