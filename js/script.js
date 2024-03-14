'use strict';

let result = 0;

loop1: for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) {
        continue loop1;
    }
    result += i;
}

console.log(`сума всіх непарних чисел в діапазоні від 1 до 20 = ${result}`)