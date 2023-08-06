function superReducedString(s) {
  let i = 1;
  const set = [...new Set(s)].map(v => v + v);

  while (s.length) {
    let flag = false;

    for (let i = 0; i < set.length; i++) {
      if (s.includes(set[i])) {
        s = s.replaceAll(set[i], '');
        continue;
      }

      if (i === set.length - 1) flag = true;
    }

    if (flag) break;
  }

  return s.length ? s : 'Empty String';
}

// best
function super_reduced_string(s) {
  // Complete this function
  var chars = s.split('');
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i + 1]) {
      chars.splice(i, 2);
      return super_reduced_string(chars.join(''));
    }
  }
  return s.length > 0 ? s : 'Empty String';
}
