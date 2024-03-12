'use strict';

const arr = [1, 2, 3, 4, 5];
let result = 0;
let result2 = 0;

for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    result2 += Math.pow(arr[i], 2)
}

console.log(`Сумма елементів массиву = ${result}`)
console.log(`Сумма квадратів елементів массиву = ${result2}`)