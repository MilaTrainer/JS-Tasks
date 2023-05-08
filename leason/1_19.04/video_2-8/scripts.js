'use strict'
/*let admin;
let name;
name = 'john';
admin = name;
alert(admin);

название переменной
let ourPlanetName;
let currentUserName
*/

let a;
a = 2;

//let a = 2;
//console.log(a);
//есть переменная a, которую будет равна 1


let b = 0;
b = 3;
console.log(a); // что-то за косолить

//1.3video

/*const num = 2;
num = 5; ошибка, т к constatu нельзя поменять
console.log(num);*/

//переменная
var с = 1;
с = 45;
console.log(с);


/*

let userName = prompt('What is your name?');
const hello = ('Hi');
alert = (userName + ' ' + hello);

 or 
 alert('HI'+ userName);
*/


//1.4video
//Типы данных: 
//числа (number: 0,4, -23, 23.45) 
//operatory : +, -, *, /, % остаток от деления, ** возведение в степень, <, <=, >, >=,
let num1 = 34;
let num2 = 3;
let sum = num1 + num2;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 ** num2);
console.log(num1 % num2);

//строка (string)
let name = "Mila";
let profession = "programmer";
console.log(name + profession); //конкатенация или склеивание строк

let age = 25;
console.log(name + age);
console.log('Name youre' + ' ' + name + ' ' + ', your profession: ' + ' ' + profession);

//1.5video
let userInputDate = prompt('Please, write your age');
let numberUserInputDate = Number(userInputDate);
alert(numberUserInputDate + 10); //приведение строки к числу
console.log(userInputDate)


//1.6video 
// promt alert confirm

let user = prompt('Your name'); // всплывающее окно
console.log(user); //чтобы появилось в console 


let us = prompt('Your name');
console.log('Hi, ' + us);
alert('ohhh');

alert('Hi, ' + us);

confirm('Are you sure?'); //ответ вводит да или нет  (true or false)


let admin, nname
nname = 'Jone';
admin = nname;
alert(admin);


//1.7video
//булевое значение булевый тип данный 
//boolean: true / false

let bool = confirm('Are you ok?');
console.log(bool)

console.log(5 < 3);
//операторы : <, <=, >, >=,  сравнивание
//==, ===, равно 
//!=, !== не равно

console.log(4 == '4');
//1.8video if operator

if (4 < 6) {
    alert = ('True!');
} else {
    alert = ('False!');
}


let str = ('hidden');
if (str == 'hidden') {
    str = 'visible';
}

let num = 5;

if (num == 0) {
    num = 1;
} else if (num < 0) {
    num = 'less then zero';
} else if (num > 0) {
    num *= 10;
};