'use strict';
const a = 2;
const test = 8;
const b = 4;
let num = 4;
let result = '';


//1 Якщо змінна a дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Неправильно'.
a === 0 ? console.log('1 Вірно') : console.log('1 Неправильно');

//2 Якщо змінна a більша за нуль, то виведіть 'Вірно', інакше виведіть 'Невірно'.
a > 0 ? console.log('2 Вірно') : console.log('2 Неправильно');

//3  Якщо змінна a менша за нуль, то виведіть 'Вірно', інакше виведіть 'Невірно'.
a < 0 ? console.log('3 Вірно') : console.log('3 Неправильно');

//4 Якщо змінна a більша або дорівнює нулю, то виведіть 'Вірно', інакше виведіть 'Неправильно'.
a >= 0 ? console.log('4 Вірно') : console.log('4 Неправильно');

//5 Якщо змінна a менша або дорівнює нулю, то виведіть 'Вірно', інакше виведіть 'Неправильно'.
a <= 0 ? console.log('5 Вірно') : console.log('5 Неправильно');

//6 Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
a !== 0 ? console.log('6 Вірно') : console.log('6 Неправильно');

//7  Якщо змінна a дорівнює 'test', виведіть 'Вірно', інакше виведіть 'Неправильно'.

a === test ? console.log('7 Вірно') : console.log('7 Неправильно');

//8 Якщо змінна a дорівнює '1' і за значенням і типом, то виведіть 'Вірно', інакше виведіть 'Невірно'.
a === 1 ? console.log('8 Вірно') : console.log('8 Неправильно');

//9 Якщо змінна a більша за нуль і менше 5-ти, то виведіть 'Вірно', інакше виведіть 'Невірно'.
a > 0 && a < 5 ? console.log('9 Вірно') : console.log('9 Неправильно');

//10 Якщо змінна a дорівнює нулю або дорівнює двом, додайте до неї 7, інакше поділіть її на 10. Виведіть нове значення змінної на екран.
if (a === 0 || a === 2) {
    alert(`a = ${a}\n${a} + 7 = ${a + 7}`)
} else {
    alert(`a = ${a}\n${a} / 10 = ${a / 10}`)
}

//11 Якщо змінна a дорівнює або менше 1, а змінна b більша або дорівнює 3, то виведіть суму цих змінних, інакше виведіть їх різницю (результат віднімання).

if (a <= 1 && b >= 3) {
    console.log(`11 a = ${a} b = ${b} їх сумма = ${a + b} `)
} else {
    console.log(`11 a = ${a} b = ${b} їх різниця = ${a - b} `)
}

//12  Якщо змінна a більше 2-х і менше 11-ти, або змінна b більша або дорівнює 6-ти і менше 14-ти, то виведіть 'Вірно', інакше виведіть 'Невірно'.
if (a > 2 && a < 11 || b >= 6 && b < 14) {
    console.log('12 Вірно')
} else {
    console.log('12 Неправильно')
}

//13  Змінна num може приймати 4 значення: 1, 2, 3 або 4. Якщо вона має значення 1, то в змінну result запишемо зима, якщо має значення 2 - весна і так далі. Розв'яжіть завдання через switch-case.

switch (num) {
    case 1:
        result = 'зима'
        break
    case 2:
        result = 'весна'
        break
    case 3:
        result = 'літо'
        break
    case 4:
        result = 'осінь'
        break
}
console.log(`13 ${result}`)