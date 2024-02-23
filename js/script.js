'use strict';
//Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);
const string1 = prompt('enter something');
const string2 = prompt('enter something');
const string3 = prompt('enter something');

console.log (`${string1} ${string2} ${string3}`)

//Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.

const num = 12345;
const str = String(num);
const num2 = str.split('').join(' ');
console.log(num2)