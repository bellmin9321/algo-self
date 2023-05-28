// my solution
function matchingStrings(strings, queries) {
  const ans = [];

  queries.map(query => {
    let count = 0;

    strings.forEach(string => {
      if (query === string) count++;
    });

    ans.push(count);
  });

  return ans;
}

// best
function matchingStrings(strings, queries) {
  let matches = [];

  queries.forEach(q => matches.push(strings.filter(s => s === q).length));
  return matches;
}
d;
