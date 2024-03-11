'use strict';

//task 1

const x = 10;
const y = 7;

x > y ? console.log('x більше за y') : console.log('x не більше, ніж y');

//task 2

const num = prompt('Введіть ціле число');
let absNum = Math.abs(Number(num));
let numLength;

switch (String(absNum).length) {
    case 1:
        numLength = 'однозначне'
        break
    case 2:
        numLength = ' двозначне'
        break
    case 3:
        numLength = 'тризначне'
        break
    case 4:
        numLength = 'чотиризначне'
        break
    case 5:
        numLength = 'пятизначне'
        break
    default:
        numLength = 'і дужеееее велике'
}

if (Number(num) >= 0) {
    console.log(`Число ${num} позитивне ${numLength}`)
} else if (Number(num) < 0) {
    console.log(`Число ${num} негативне ${numLength}`)
} else {
    console.log('Введіть число')
}

//task 3

const num1 = Number(prompt('Введіть перше число'));
const num2 = Number(prompt('Введіть друге число'));
const num3 = Number(prompt('Введіть третє число'));

if (num1 > num2 && num1 > num3) {
    console.log(`Число ${num1} найбільше`)
} else if (num2 > num1 && num2 > num3) {
    console.log(`Число ${num2} найбільше`)
} else {
    console.log(`Число ${num3} найбільше`)
}

//task 4

const triangle1 = Number(prompt('Введіть довжину першої сторони'));
const triangle2 = Number(prompt('Введіть довжину другої сторони'));
const triangle3 = Number(prompt('Введіть довжину третьої сторони'));

if (triangle1 + triangle2 > triangle3) {
    console.log('це можливо')
} else {
    console.log('це неможливо')
}
