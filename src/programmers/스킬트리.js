// 2번쨰 풀이: ⭕️ Solved(10min)
function solution(skill, skill_trees) {
  let ans = 0;

  const newTrees = skill_trees.map(tree => {
    let str = '';

    [...tree].forEach(v => (str += skill.includes(v) ? v : ''));

    return str;
  });

  newTrees.forEach(v => (skill.indexOf(v) === 0 ? ans++ : ans));

  return ans;
}

// my solution
function solution(skill, skill_trees) {
  const s = skill_trees.map(str =>
    [...str].filter(v => skill.includes(v)).join(''),
  );

  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    if (skill.slice(0, s[i].length) === s[i]) ans++;
  }

  return ans;
}

// best
function solution(skill, skill_trees) {
  var regex = new RegExp(`[^${skill}]`, 'g');

  return skill_trees
    .map(x => x.replace(regex, ''))
    .filter(x => {
      return skill.indexOf(x) === 0 || x === '';
    }).length;
}

// 2nd
function solution(skill, skill_trees) {
  function isCorrect(n) {
    let test = skill.split('');
    for (var i = 0; i < n.length; i++) {
      if (!skill.includes(n[i])) continue;
      if (n[i] === test.shift()) continue;
      return false;
    }
    return true;
  }

  return skill_trees.filter(isCorrect).length;
}

// 3rd
function solution(skill, skill_trees) {
  const skills = skill.split('');
  return skill_trees.filter(
    tree =>
      skill.indexOf(
        tree
          .split('')
          .filter(s => skills.includes(s))
          .join(''),
      ) === 0,
  ).length;
}
