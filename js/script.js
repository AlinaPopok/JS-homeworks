'use strict';

const num1 = +prompt('Введіть перше число');
const num2 = +prompt('Введіть  друге число');
const operation = prompt('Введіть математичну операцію "add", "sub", "mult", "div"');



if( !isNaN(num1) && !isNaN(num2) ){
    switch (operation.toLowerCase()){
        case 'add':
            alert(`${num1} + ${num2} = ${num1 + num2}`)
            break
        case 'sub':
            alert(`${num1} - ${num2} = ${num1 - num2}`)
            break
        case 'div':
            alert(`${num1} / ${num2} = ${num1 / num2}`)
            break
        case 'mult':
            alert(`${num1} * ${num2} = ${num1 * num2}`)
            break
        default : alert('Оберіть одну з операцій')
    }
}
else alert('Введіть числове значення')