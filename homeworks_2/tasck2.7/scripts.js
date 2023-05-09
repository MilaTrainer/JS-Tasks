'use strict'
/*
Задание 7



Переписать задание 4 в виде функции. 
Т.е. описать функцию, которая выводит квадраты чисел из заданного диапазона
 (диапазон будет попадать в функцию как аргументы).


*/
// const num = prompt("How many numbers' squares you want to calculate 0 - 10?");
// for (let i = 0; i < 100; i++) {
//     let result = i ** 2;
//     if (i < num && result) {
//         console.log(result);
//     }
// }

const num = prompt("How many numbers' squares you want to calculate 0 - 10?");

function calcNumber4() {
    for (let i = 0; i < 100; i++) {
        let result = i ** 2;
        if (i < num && result) {
            console.log(calcNumber);
        }

    }
}