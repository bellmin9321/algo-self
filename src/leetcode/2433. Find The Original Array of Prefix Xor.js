// my solution
var findArray = function (pref) {
  if (pref.length === 1) return pref;
  const result = [pref[0]];

  for (let i = 1; i < pref.length; i++) {
    result[i] = pref[i - 1] ^ pref[i];
  }

  return result;
};
