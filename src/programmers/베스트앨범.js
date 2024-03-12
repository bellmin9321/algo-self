// My solution ⭕️ 통과
function solution(genres, plays) {
  const genre = {};

  for (let i = 0; i < genres.length; i++) {
    if (!genre[genres[i]]) {
      genre[genres[i]] = { [i]: plays[i] };
      genre[genres[i]]['sum'] = plays[i];
    } else {
      genre[genres[i]][i] = plays[i];
      genre[genres[i]]['sum'] += plays[i];
    }
  }

  return Object.entries(genre)
    .sort((a, b) => {
      return b[1].sum - a[1].sum;
    })
    .map(v => {
      delete v[1].sum;
      return Object.entries(v[1]).sort((a, b) => b[1] - a[1]);
    })
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .map(v => {
      return v.slice(0, 2);
    })
    .flat()
    .map(v => v[0] * 1);
}

// Best
function solution(genres, plays) {
  var dic = {};
  genres.forEach((t, i) => {
    dic[t] = dic[t] ? dic[t] + plays[i] : plays[i];
  });

  var dupDic = {};

  return genres
    .map((t, i) => ({ genre: t, count: plays[i], index: i }))
    .sort((a, b) => {
      if (a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
      if (a.count !== b.count) return b.count - a.count;
      return a.index - b.index;
    })
    .filter(t => {
      if (dupDic[t.genre] >= 2) return false;
      dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre] + 1 : 1;
      return true;
    })
    .map(t => t.index);
}
