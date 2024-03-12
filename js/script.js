'use strict';
//1 Вивести на сторінку в один рядок через кому числа від 10 до 20.

let result = ''
for (let i = 10; i < 21; i++) {
    if (i < 20) {
        result += i + ','
    } else {
        result += i
    }
}
console.log(result)

//2 Вивести квадрати чисел від 10 до 20.

for (let i = 10; i < 21; i++) {
    console.log(Math.pow(i, 2))
}

//3 Вивести таблицю множення на 7.

for (let i = 1; i < 8; i++) {
    console.log(`7 * ${i} = ${7 * i}`)
}
//4 Знайти суму всіх цілих чисел від 1 до 15.

let result2 = 0;

for (let i = 1; i < 16; i++) {
    result2 += i;
}
console.log(result2)

//5 Знайти добуток усіх цілих чисел від 15 до 35.

let result3 = 1;

for (let i = 15; i < 36; i++) {
    result3 *= i;
}
console.log(result3)

//6 Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let result4 = 0
for (let i = 1; i < 501; i++) {
    result4 += i
}
console.log(result4 / 500)

//7 Вивести суму лише парних чисел в діапазоні від 30 до 80.

let result5 = 0;
for (let i = 30; i < 81; i++) {
    if (i % 2 === 0) {
        result5 += i
    }
}
console.log(result5)

//8 Вивести всі числа в діапазоні від 100 до 200 кратні 3.

for (let i = 100; i < 201; i++) {
    if (i % 3 === 0) {
        console.log(i)
    }
}

//9 Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
//10 Визначити кількість його парних дільників.
//11 Знайти суму його парних дільників.

const num = prompt('Введіть натуральне число');
let result6 = '';
let result7 = 0;
let result8 = ''
let result9 = 0;


for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        result6 += `${i} `
        if (i % 2 === 0) {
            result7++
            result8 += `${i} `
            result9 += i;
        }
    }
}
console.log(`Всі дільники числа ${num} - ${result6}`)
console.log(`Парні дільники числа ${num} - ${result8}. Їх кількість - ${result7}`)
console.log(`Сумма парних дільникі числа ${num} - ${result9}`)



//12 Надрукувати повну таблицю множення від 1 до 10.

for (let i = 1; i < 11; i++) {
    console.log('--------')
    for (let k = 1; k < 11; k++) {
        console.log(`${i} * ${k} = ${i * k}`)
    }
}


