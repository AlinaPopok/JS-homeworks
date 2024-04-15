// Task #1
const getFactorial = function (num) {
  if (num === 1 || num === 0) return 1;
  return num * getFactorial(num - 1);
};
console.log(getFactorial(3));

// Task #2
const pow = function (num, degree) {
  if (degree === 1) return num;
  return num * pow(num, degree - 1);
};
console.log(pow(3, 3));

// Task #3
const sum = function (a, b) {
  if (b === 0) return a;
  return sum(++a, --b);
};
console.log(sum(3, 3));
