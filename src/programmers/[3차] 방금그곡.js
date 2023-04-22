function solution(z, musicinfos) {
  let ans = [];
  
  for (let i = 0; i < musicinfos.length; i++) {
      
      const [s, e, t, m] = musicinfos[i].split(',');
      const endMins = e.split(':')[0] * 60 + e.split(':')[1] * 1;
      const startMins = s.split(':')[0] * 60 + s.split(':')[1] * 1;
      
      const playtime = endMins - startMins;
      const full = m.repeat(parseInt(playtime / m.length)) + m.slice(0, playtime % m.length);

      if (full.includes(z)) {
          ans.push([t, playtime])
      }
  }
  console.log(ans)
  return ans.length ? ans.sort((a, b) => b[1] - a[1])[0][0] : '(None)';
}

// Try2: 70 / 100 점
function solution(z, musicinfos) {
  let ans = [];
  z = z.replaceAll('C#', 'U').replaceAll('D#', 'W').replaceAll('F#', 'X').replaceAll('G#', 'Y').replaceAll('A#', 'Z')
  
  for (let i = 0; i < musicinfos.length; i++) {
      
      const [s, e, t, m] = musicinfos[i].split(',');
      const endMins = e.split(':')[0] * 60 + e.split(':')[1] * 1;
      const startMins = s.split(':')[0] * 60 + s.split(':')[1] * 1;
      
      const playtime = endMins - startMins;
      let full = m.repeat(parseInt(playtime / m.length)) + m.slice(0, playtime % m.length);
      
  full = full.replaceAll('C#', 'U').replaceAll('D#', 'W').replaceAll('F#', 'X').replaceAll('G#', 'Y').replaceAll('A#', 'Z');
      
      if (full.includes(z)) {
          ans.push([t, playtime, i])
      }
  }
  return ans.length ? ans.sort((a, b) => b[1] - a[1] || a[2] - b[2])[0][0] : '(None)';
}