'use strict';
const num = prompt('Введіть число');
const power = prompt('Введіть степінь');

const numToPower = function (num, power = 1) {
    const result = num ** power;
    return isNaN(result) ? 'помилка' : result
};

alert(numToPower(num, power));