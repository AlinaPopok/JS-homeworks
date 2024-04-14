// indexOf
const array = [2, 9, 7];
const myIndexOff = function (arr, searchElement, fromIndex = 0) {
  const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
  for (let i = startIndex; i < arr.length; i++) {
    if (arr[i] === searchElement) {
      return i;
    }
  }
  return -1;
};

console.log(myIndexOff(array, 2));

// lastIndexOf

const myArr = [1, 2, 3, 4, 5];
const myLastIndexOf = function (arr, searchValue, fromIndex = arr.length - 1) {
  for (let i = fromIndex; i >= 0; i--) {
    if (arr[i] === searchValue) {
      return i;
    }
  }
  return -1;
};
console.log(myLastIndexOf(myArr, 5));

// find

const arr = [1, 2, 3, 4, 5];

const myFind = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
  }
};
const callback = function (element, index, arr) {
  return element % 2 === 0;
};

console.log(myFind(arr, callback));

// findIndex

const arrForIndex = [2, 4, 5, 1, 2, 3, 4, 5];

const myFindIndexOf = function (callback, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return i;
    }
  }
  return -1;
};

const callback2 = function (element, index, arr) {
  return element === 1;
};
console.log(myFindIndexOf(callback2, arrForIndex));

// includes

const pets = ["cat", "dog", "bat"];
const myIncludes = function (arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      return true;
    }
  }
  return false;
};
console.log(myIncludes(pets, "cow"));

// every
const bigArr = [11, 54, 18, 130, 44];
const myEvery = function (callback, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return false;
    }
  }
  return true;
};
const everyCallback = function (cur, index, arr) {
  return cur < 10;
};

console.log(myEvery(everyCallback, bigArr));

// some

const arrWithSomeNums = [1, 2, 30, 4, 5];
const mySome = function (callback, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return true;
    }
  }
  return false;
};
const someCallback = function (elem, index, arr) {
  return elem > 10;
};

console.log(mySome(someCallback, arrWithSomeNums));

// reduce

const arr4 = [1, 2, 3, 4, 57];

const myReduce = function (arr, callback, initValue) {
  let fromIndex;
  let accumulator;

  if (initValue) {
    fromIndex = 0;
    accumulator = initValue;
  } else {
    fromIndex = 1;
    accumulator = arr[0];
  }

  for (let i = fromIndex; i < arr.length; i++) {
    accumulator = callback(arr[i], accumulator, i, arr);
  }
  return accumulator;
};

const sumCallback = function (element, sum) {
  return sum + element;
};
console.log(myReduce(arr4, sumCallback));
