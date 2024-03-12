'use strict';

//1 Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let result = ''
for (let i = 20; i <= 30; i += 0.5) {
    result += `${i} `
}
console.log(result)

//2 Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
let result2 = ''
for (let i = 10; i < 101; i += 10) {
    result2 += `${i} доларів коштує - ${i * 27} гривень\n`
}
console.log(result2)

//Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

const n = 6689;
let result3 = '';

for (let i = 1; i < 101; i++) {
    if (Math.pow(i, 2) <= n) {
        result3 += `Квадрат числа ${i} дорівнює ${Math.pow(i, 2)}\n`
    }
}
console.log(result3)

//4 Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

const num = 29;
let divCount = 0;

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        divCount++
    }
}

if (divCount > 2) {
    console.log(`число ${num} має ${divCount} дільників і не є простим`)
} else if (divCount === 2) {
    console.log(`число ${num} має ${divCount} дільників і є простим`)
} else if (divCount === 1) {
    console.log(`число ${num} має ${divCount} дільник не є простим`)
} else {
    console.log('Щось пішло не так')
}

//5 Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

const num2 = prompt('введіть число');
let result4 = 0

for (let i = 1; i < num2; i++) {
    if (Math.pow(3, i) === Number(num2)) {
        result4 = i;
        break;
    }
}

if (result4 > 1) {
    console.log(`Щоб отримати число ${num2} потрібно звести 3 у ${result4} ступінь`)
} else {
    console.log(`Неможливо звести число 3 у ступінь щоб отримати ${num2}`)
}