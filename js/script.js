'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const random = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const key = function (length, characters) {
    let result = ''
    for (let i = 0; i < length; i++) {
        result += characters[random(0, characters.length)];
    }
    return result;
}

console.log(key(10, characters))
