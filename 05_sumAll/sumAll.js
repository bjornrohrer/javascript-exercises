const sumAll = function (...args) {
  let total = 0;
  for (
    i = Math.min.apply(null, args);
    i <= Math.max.apply(null, args);
    i += 1
  ) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
