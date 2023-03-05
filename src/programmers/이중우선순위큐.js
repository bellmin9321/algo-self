// my solution
function solution(operations) {
  const result = [];

  for (let i = 0; i < operations.length; i++) {
    const operation = operations[i];

    if (operation === 'D 1' && result.length) {
      const max = [...result].sort((a, b) => a - b).pop();
      result.splice(result.lastIndexOf(max), 1);
      continue;
    } else if (operation === 'D -1' && result.length) {
      const min = [...result].sort((a, b) => a - b).shift();
      result.splice(result.indexOf(min), 1);
      continue;
    }

    result.unshift(+operation.slice(2));
  }

  if (!result.length) return [0, 0];

  const sorted = [...result].sort((a, b) => a - b);
  return [sorted[sorted.length - 1], sorted[0]];
}

// best
function solution(arg) {
  var list = [];
  arg.forEach(t => {
    if (t[0] === 'I') {
      list.push(+t.split(' ')[1]);
    } else {
      if (!list.length) return;

      var val = (t[2] === '-' ? Math.min : Math.max)(...list);
      var delIndex = list.findIndex(t => t === val);

      list.splice(delIndex, 1);
    }
  });

  return list.length ? [Math.max(...list), Math.min(...list)] : [0, 0];
}
