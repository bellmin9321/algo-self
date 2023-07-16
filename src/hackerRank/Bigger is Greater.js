// my solution: ❌ NotSolved
function biggerIsGreater(w) {
  return w.split(' ').map(str => {
    if (str.slice(-2) === [...str.slice(-2)].sort().join(''))
      return 'no answer';
    else {
      return str.slice(0, -2) + [...str.slice(-2)].slice(-2).sort().join('');
    }
  });
}

// best
function biggerIsGreater(w) {
  var vals = w.split('');
  //console.log(vals);
  /*
  1- First Find the largest x such that P[x]<P[x+1].
  (If there is no such x, P is the last permutation.)
  */
  var largestI = -1;
  for (let i = 0; i < vals.length - 1; i++) {
    if (vals[i] < vals[i + 1]) {
      largestI = i;
    }
  }
  //console.log('largestI: ' +vals[largestI]);
  if (largestI === -1) {
    return 'no answer';
  }
  /*
  2- Second Find the largest y such that P[x]<P[y].
  */
  var largestJ = -1;
  for (let j = 0; j < vals.length; j++) {
    if (vals[largestI] < vals[j]) {
      largestJ = j;
    }
  }
  //console.log('largestJ: ' +vals[largestJ]);

  //3- Swap P[x] and P[y].
  let temp = vals[largestI];
  vals[largestI] = vals[largestJ];
  vals[largestJ] = temp;
  console.log(vals);

  //4-Reverse P[x+1 .. n].
  var endArray = vals.splice(largestI + 1);
  endArray.reverse();
  vals = vals.concat(endArray);

  return vals.join('');
}

// 2nd
function biggerIsGreater(w) {
  w = w.split('');

  for (let i = w.length - 2; i >= 0; i--) {
    let after = w.slice(i + 1, w.length);
    after.sort((a, b) => (a > b ? 1 : -1));
    let max = after.find(e => e > w[i]);

    if (max) {
      let past = w.slice(0, i),
        after = w.slice(i);

      after.splice(
        after.findIndex(e => e === max),
        1,
      );
      after.sort((a, b) => (a > b ? 1 : -1));

      return past.join('') + max + after.join('');
    }
  }

  return 'no answer';
}
