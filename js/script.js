'use strict';

//1 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);

console.log(arr3);

//2 Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

const arr4 = arr1.reverse()

console.log(arr4);

//3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

const arr5 = [1, 2, 3];
arr5.push(4, 5, 6);
console.log(arr5)

//4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

const arr6 = [1, 2, 3];
arr6.unshift(4, 5, 6);
console.log(arr6);

//5 Дан массив ['js',"css', 'jq']. Выведите на экран первый элемент.
//6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

const arr7 = ['js', 'css', 'jq'];
const lastIndex = function (arr) {
    return arr.length - 1;
}

console.log(arr7[0]);
console.log(arr7[lastIndex(arr7)]);

//7  Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [1, 2, 3].
//8 Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [4, 5].

const arr8 = [1, 2, 3, 4, 5];
const arr9 = arr8.concat(1, 2, 3)
const arr10 = arr8.concat(4, 5)
console.log(arr9);
console.log(arr10);

//9 Дан массив [1, 2, 3, 4, 5]. С помощью метода преобразуйте массив в [1, 4, 5].

const arr11 = [1, 2, 3, 4, 5];
arr11.splice(1, 2);
console.log(arr11)


//10 Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [2, 3, 4].

const arr12 = [1, 2, 3, 4, 5];
const arr13 = arr12.slice(1, 4);
console.log(arr13);

//11  Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

const arr14 = [1, 2, 3, 4, 5];
arr14.splice(2, 0, 'a', 'b', 'c');
console.log(arr14)

//12  Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

const arr15 = [1, 2, 3, 4, 5];
arr15.splice(1, 0, 'a', 'b');
arr15.splice(6, 0, 'c');
arr15.splice(8, 0, 'e');
console.log(arr15);

//13 Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

const arr16 = [3, 4, 1, 2, 7];
console.log(arr16.sort());

//14 Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.

const arr17 = [5, 6, 7, 8, 9];
const sum = function (arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result;
}
console.log(sum(arr17));

//15  Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.

const arr18 = [5, 6, 7, 8, 9];
let result = 0
for (let i = arr18.length - 1; i > 0; i--) {
    result = arr18[i] ** 2;
    arr18.splice(i, 1, result)
}
console.log(arr18)

//16  Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.

const arr19 = [1, -3, 5, 6, -7, 8, 9, -11];
for (let i = arr19.length - 1; i >= 0; i--) {
    if (arr19[i] > 0) {
        arr19.splice(i, 1)
    }
}
console.log(arr19)


//17 Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.

const arr20 = [1, -3, 5, 6, -7, 8, 9, -11]
for (let i = arr20.length - 1; i >= 0; i--) {
    if (arr20[i] % 2 !== 0) {
        arr20.splice(i, 1)
    }
}
console.log(arr20)


//18 Дан массив со строками ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az']. Оставьте в нем только те строки, длина которых больше 5-ти символов.

const arr21 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
for (let i = arr21.length - 1; i >= 0; i--) {
    if (arr21[i].length < 5) {
        arr21.splice(i, 1)
    }
}

console.log(arr21);

//19 Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.

const arr22 = [1, 2, [3, 4], 5, [6, 7]];

for (let i = arr22.length - 1; i >= 0; i--) {
    if (!Array.isArray(arr22[i])) {
        arr22.splice(i, 1)
    }
}

console.log(arr22);

//Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.

const arr23 = [5,-3, 6,-5, 0,-7, 8, 9];
let result2 = 0

for (let i = 0; i < arr23.length; i++) {
    if(arr23[i] < 0){
        result2++
    }
}

console.log(result2)