// my solution: ❌ NotSolved -> 시간 초과 및 힌트 봄
function solution(files) {
  return files.sort((a, b) => {
    const sortCondition = file => {
      let head = '',
        number = '',
        isTail = false;

      for (let l of file) {
        if (isNaN(l) && isTail) break;
        else if (isNaN(l)) head += l;
        else if (!isNaN(l)) {
          if (l === ' ') head += l;
          else {
            isTail = true;
            number += l;
          }
        }
      }
      return [head.toLowerCase(), +number];
    };
    const [aHead, aNumber] = sortCondition(a);
    const [bHead, bNumber] = sortCondition(b);

    if (aHead > bHead) return 1;
    else if (aHead < bHead) return -1;
    else return aNumber - bNumber;
  });
}

// Try2
function solution(files) {
  return files.sort((a, b) => {
    let aHead = '';
    let bHead = '';
    let aNum = '';
    let bNum = '';
    let aNumIndexs = [];
    let bNumIndexs = [];

    for (let i = 1; i < a.length; i++) {
      if (isNaN(a[i - 1]) && !isNaN(a[i])) {
        aNumIndexs.push(i);
      } else if (!isNaN(a[i - 1]) && isNaN(a[i])) {
        aNumIndexs.push(i - 1);
      }

      if (aNumIndexs.length === 2) break;
    }

    for (let i = 1; i < b.length; i++) {
      if (isNaN(b[i - 1]) && !isNaN(b[i])) {
        bNumIndexs.push(i);
      } else if (!isNaN(b[i - 1]) && isNaN(b[i])) {
        bNumIndexs.push(i - 1);
      }

      if (bNumIndexs.length === 2) break;
    }

    aHead = a.slice(0, aNumIndexs[0]).toLowerCase();
    aNum = a.slice(aNumIndexs[0], aNumIndexs[1] + 1);
    bHead = b.slice(0, bNumIndexs[0]).toLowerCase();
    bNum = b.slice(bNumIndexs[0], bNumIndexs[1] + 1);

    return aHead === bHead
      ? Number(aNum) - Number(bNum)
      : aHead.charCodeAt() - bHead.charCodeAt();
  });
}

// Try3
function solution(files) {
  const map = files.map((file, i) => {
    let numIndexs = [];

    for (let i = 0; i < file.length; i++) {
      if (isNaN(file[i - 1]) && !isNaN(file[i])) {
        numIndexs.push(i);
      } else if (!isNaN(file[i - 1]) && isNaN(file[i])) {
        numIndexs.push(i - 1);
      }
      if (numIndexs.length === 2) break;
    }
    const reg = /[.-\s]/g;

    const head = file.slice(0, numIndexs[0]).toLowerCase().replace(reg, '');
    const number = +file.slice(numIndexs[0], numIndexs[1] + 1);
    // const tail = file.slice(numIndexs[1] + 1);
    return { index: i, head, number };
  });

  const sorted = [...map].sort((a, b) => {
    return a.head === b.head
      ? a.number - b.number
      : a.head.charCodeAt() - b.head.charCodeAt();
  });

  return sorted.map(v => files[v.index]);
}

// best
function solution(files) {
  let answerWrap = files.map((file, index) => ({ file, index }));
  const compare = (a, b) => {
    const reg = /(\D*)([0-9]*)/i;
    const A = a.match(reg);
    const B = b.match(reg);
    const compareHead = A[1].toLowerCase().localeCompare(B[1].toLowerCase());
    const compareNumber = (a, b) => {
      return parseInt(a) > parseInt(b) ? 1 : parseInt(a) < parseInt(b) ? -1 : 0;
    };
    return compareHead === 0 ? compareNumber(A[2], B[2]) : compareHead;
  };
  answerWrap.sort((a, b) => {
    const result = compare(a.file, b.file);
    return result === 0 ? a.index - b.index : result;
  });
  return answerWrap.map(answer => answer.file);
}

// 2nd
function solution(files) {
  const re = /^([a-zA-Z-\. ]+)([0-9]+)(.*)$/;
  let dict = [];
  files.forEach((entry, idx) => {
    let [fn, head, num] = entry.match(re);
    dict.push({ fn, head: head.toLowerCase(), num: parseInt(num), idx });
  });

  return dict
    .sort((a, b) => {
      if (a.head > b.head) return 1;
      if (a.head < b.head) return -1;
      if (a.num > b.num) return 1;
      if (a.num < b.num) return -1;
      return a.idx - b.idx;
    })
    .map(e => e.fn);
}
