
function collatz (n) {
  const res = [];
  while (n !== 1) {
    res.push(n);
    if (n%2 === 0) n = n/2;
    else n = 3*n+1;
  }
  res.push(1);
  return res;
}

function longestBetween (n) {
  let max = 0;
  let maxNo;
  let arr =[];
  for (let i = 1; i <= n; i++) {
    arr = collatz(i);
    if (arr.length > max) {
      maxNo = i;
      max = arr.length;
    }
  }
  return maxNo;
}

module.exports = { collatz, longestBetween };
