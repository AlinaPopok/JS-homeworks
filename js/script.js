'use strict';

const num = prompt('Введіть число');
let divider = 1;

if (Number(num) < 1) {
    console.log(NaN)
} else if (Number(num) === 1) {
    console.log(`Найменшим дільником числа ${num} є число ${divider}`)
} else {
    for (let i = 2; i <= Number(num); i++) {
        if (Number(num) % i === 0) {
            divider = i;
            console.log(`Найменшим дільником числа ${num} є число ${divider}`)
            break
        }
    }
}


