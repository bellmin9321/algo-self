// my solution
var busyStudent = function (startTime, endTime, queryTime) {
  let ans = 0;

  for (let i in startTime) {
    if (startTime[i] <= queryTime && queryTime <= endTime[i]) {
      ans++;
    }
  }

  return ans;
};
