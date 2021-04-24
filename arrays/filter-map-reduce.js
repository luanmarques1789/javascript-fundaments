// Returning the sum of all pairs numbers
// -> Filter pairs: [10, 50, 34, 4, 90, 2, 12]
// -> Double values: [20, 100, 68, 8, 180, 4, 24]
// -> Reduce (sum all): [404]

const arr = [10, 37, 50, 9, 34, 3, 4, 90, 61, 2, 12];

const res = arr
  .filter((value) => value % 2 === 0)
  .map((value) => value * 2)
  .reduce((previousValue, currentValue) => (previousValue += currentValue));

console.log(res);
