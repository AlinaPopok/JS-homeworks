'use strict';

const tempValue = +prompt('Введіть градуси');
const scale = prompt('Оберіть шкалу "C" чи "F"');

if( scale === 'C' || scale === 'c'){

    alert(`По Фаренгейту це буде ${(tempValue * 9/5) + 32} F`);
}
else if ( scale === 'F' || scale === 'f'){
    alert(`По Цельсію це буде ${Math.round((tempValue - 32) * 5/9)} C`);
}