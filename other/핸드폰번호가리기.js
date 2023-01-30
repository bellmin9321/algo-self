function solution(phone_number) {
  return [...phone_number].fill('*', 0, phone_number.length - 4).join('');
}

function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, '*');
}
