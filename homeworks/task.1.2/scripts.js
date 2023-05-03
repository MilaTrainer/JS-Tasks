'use strict'
const userName = prompt('What is your name?');
alert('Hi, ' + userName + '!');



let a = 1,
    b = 1;

let c = ++a; // ?
let d = b++; // ?
/*
a = 2
b = 2
c = 2
d = 1

 let a = 1, b = 1;

alert( ++a ); // 2, префиксная форма возвращает новое значение
alert( b++ ); // 1, постфиксная форма возвращает старое значение

alert( a ); // 2, значение увеличено один раз
alert( b ); // 2, значение увеличено один раз*/


let userSecondNumber = prompt('please, write the first number');
let userFirstNumber = prompt('please, write the second number');
console.log(userSecondNumber ** userFirstNumber);