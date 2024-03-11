'use strict';

const num = (prompt('Введіть число'));

if (isNaN(Number(num))) {
    alert('Введіть коректне число')
} else {
    if (num.charAt(num.length - 1) === '1') {
        alert(`Вам ${num} рік`)
    } else if (num.charAt(num.length - 1) === '2'
        || num.charAt(num.length - 1) === '3'
        || num.charAt(num.length - 1) === '4') {
        alert(`Вам ${num} роки`)
    } else {
        alert(`Вам ${num} років`)
    }
}
