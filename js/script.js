'use strict';

//1 Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.

const arr = ['a', 'b', 'c', 'd'];
const arr2 = arr.slice(0, 2).join('+');
const arr3 = arr.slice(2, 4).join('+');

console.log(`${arr2}, ${arr3}`);


//2 Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной

const arr4 = [2, 5, 3, 9];
const result = arr4.shift() * arr4.shift() + arr4.shift() * arr4.shift();

console.log(result);

//3 Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.

const arr5 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const callback = function (elem) {
    return elem === 4;
}
const isFour = function (arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        temp = arr[i].find(callback);
        if (temp) break;
    }
    return temp
}

console.log(isFour(arr5));

//4 Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’.

const obj = {js: ['jQuery', 'Angular'], php: 'hello', css: 'world'}
const findValue = function (elem) {
    return elem === 'jQuery';
}
const findKeyValue = obj.js.find(findValue);
console.log(findKeyValue);

//5  Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.

const arr6 = [];
const fillArr = function (arr, elem, length) {
    let temp = ''
    for (let i = 0; i < length; i++) {
        temp += elem
        arr.push(temp);
    }
    return arr
}
console.log(fillArr(arr6, 'x', 5))

//6 Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.

const arr7 = [];
const fillArr2 = function (arr, length) {
    for (let i = 1; i <= length; i++) {
        let temp = '';
        for (let j = 0; j < i; j++) {
            temp += i
        }
        arr.push(temp)
    }
    return arr
}
console.log(fillArr2(arr7, 4));

//7 Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве. Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].


const arrayFill = function (elem, length) {
    const arr8 = [];
    for (let i = 0; i < length; i++) {
        arr8.push(elem)
    }
    return arr8
}
console.log(arrayFill('x', 5));

//8 Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

const arr9 = [1, 3, 5, 3, 5, 6, 7];
const findTen = function (arr) {
    let total = 0
    let count = 0;
    arr.some(function (elem) {
        count++
        total += elem
        return total > 10
    })
    return count
}
console.log(findTen(arr9));

//9 Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

const arr10 = [0, 1, 2, 3, 4, 5, 6, 7];
const arrRevers = function (arr) {
    let temp = 0;
    for (let i = 0; i < arr.length / 2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr
}
console.log(arrRevers(arr10));

//10 Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

const arr11 = [[1, 2, 3], [4, 5], [6]];
const sum = function (arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        result += arr[i].reduce(function (acc, cur) {
            return acc + cur;
        })
    }
    return result
}
console.log(sum(arr11));

//11 Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

const arr12 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

const sum2 = function (arr) {
    return arr.flat(2).reduce(function (acc, cur) {
        return acc + cur;
    })
}
console.log(sum2(arr12))




