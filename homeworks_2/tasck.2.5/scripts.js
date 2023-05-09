'use strict'
/*

Задание 5

Напишите программу, 
которая выводит в консоль числа от 1 до 100.
При этом вместо чисел, кратных трем, 
программа должна выводить слово «Fizz», 
а вместо чисел, кратных пяти, — слово «Buzz». 
Если число кратно и 3, и 5, 
то программа должна выводить слово «FizzBuzz»
*/
const num = prompt('Please, write a number');

for (let i = 1; i < 100; i++)
    if (i % 3 && i % 5) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
    console.log('Fizz');
} else if (i % 5 == 0) {
    console.log('Buzz');
}