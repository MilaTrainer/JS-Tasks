'use strict'
/*
Задание 4
Вывести в консоль квадраты чисел 
от 0 до 100 (не включая 100) 
- т.е. вывести числа 0, 1, 4, 9, 16...
* Задавать количество чисел, которые нужно вывести, 
при помощи функции prompt.
*/
const num = Number(prompt("How many numbers' squares you want to calculate?", 1));
for (let i = 0; i < num; i++) {
    let result = i ** 2;
    if (i < num && result < 100) {
        console.log(result);
    }
}

// второй вариант
const num1 = Number(prompt("How many numbers' squares you want to calculate?", 1));
for (let i = 0; i < num; i++) {
    let result = i ** 2;
    if (i < num1 && result < 100) {
        console.log(result);
    }
}