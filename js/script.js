'use strict';
//Задача 1
const user = {};
user.name = 'John';
user.surname = 'Smith';
console.log(user);
user.name = 'Pete';
console.log(user);
delete user.name;
console.log(user);

//Задача 2
// Можна змінити, тому що об`єкт - це посилання. Ми не змінюємо посилання на об`єкт,
// змінюємо тільки те що знаходиться всередині посилання.

//Задача 3
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
const sum = salaries.Ann + salaries.John + salaries.Pete
console.log(sum)
