// my solution
function timeConversion(s) {
  if (s.slice(-2) === 'PM') {
    if (s.slice(0, 2) * 1 === 12) {
      s = s.slice(0, -2);
    } else {
      s = String(s.slice(0, 2) * 1 + 12) + s.slice(2, -2);
    }
  } else if (s.slice(-2) === 'AM') {
    if (s.slice(0, 2) * 1 === 12) {
      s = '00' + s.slice(2, -2);
    } else {
      s = s.slice(0, -2);
    }
  }

  return s;
}

// best
function timeConversion(s) {
  // Write your code here
  let format = s.slice(-2);
  let hour = s.slice(0, 2);
  let mmss = s.slice(2, -2);

  if (format == 'AM') {
    if (hour == '12') {
      return `00${mmss}`;
    }
    return `${hour}${mmss}`;
  }

  // PM Format
  if (hour == '12') {
    return s.slice(0, -2);
  }
  return `${parseInt(hour) + 12}${mmss}`;
}

// blog
function timeConversion(s) {
  const date_array = s.slice(0, s.length - 2).split(':');

  if (s.slice(s.length - 2) == 'PM') {
    date_array[0] != '12' && (date_array[0] = Number(date_array[0]) + 12);
  } else {
    date_array[0] == '12' && (date_array[0] = '00');
  }
  return date_array.join(':');
}

// blog2
function timeConversion(s) {
  // Write your code here

  const [hh, mm, ss] = s.split(':');
  const pm = s.endsWith('PM');
  const second = ss.match(/\d+/g)[0];
  let HH = hh;
  if (pm) {
    if (hh !== '12') {
      HH = 12 + +hh;
    }
  } else {
    if (hh === '12') {
      HH = '00';
    }
  }

  return `${HH}:${mm}:${second}`;
}
