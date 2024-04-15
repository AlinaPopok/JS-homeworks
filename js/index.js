const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13],
];
const myFlat = function (arr) {
  if (arguments.length !== 1) {
    throw new Error(
      "Function accepts only 1 argument, too much arguments provided",
    );
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      result.push(arr[i]);
    } else {
      result = result.concat(myFlat(arr[i]));
    }
  }
  return result;
};
console.log(myFlat(complexArray));
