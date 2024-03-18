'use strict';

const padString = function (str, strLength, symbol = '*', addRight = true) {

    if (typeof str !== 'string') {
        return 'Помилка! Перший аргумент має бути string'
    }
    if (typeof strLength !== 'number') {
        return 'Помилка! Другий аргумент має бути number'
    }
    if (typeof symbol !== 'string') {
        return 'Помилка! Третій аргумент має бути string'
    }
    if (typeof addRight !== 'boolean') {
        return 'Помилка! Четвертий аргумент має бути boolean'
    }
    const subStr = str.substring(0, strLength);

    return addRight
        ? subStr.padEnd(strLength, symbol)
        : subStr.padStart(strLength, symbol);
}

console.log(padString('900', 26))