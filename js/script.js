'use strict';

//1 Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let result = ''
for(let i = 20; i <= 30; i += 0.5){
    result += `${i} `
}
console.log(result)
