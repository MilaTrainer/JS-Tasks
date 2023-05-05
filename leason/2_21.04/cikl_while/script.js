"use strict"
// в этом примере сначала выполняется тело, а потом проверятся нужно запускать заново этот цикл или нет
// пока userNumber не станет равно числу 1
let userNumber;
do {
    userNumber = Number(prompt('Write a number')); // запрашиваем это число, угадывать
} while (userNumber !== 1); //пока выполняет какое-то устловие
// пока uderNumber не странет равно числу 1

alert('Congraduation');

// вторая форма - сразу делается проверка , а только потом запускается тело цикла
let userNumber1;
while (userNumber1 !== 1) {
    userNumber1 = Number(prompt('Write a number'));
}
alert('Congraduation');

//этот цикл можно использовать и с задачей со сщетчиком
let i = 0;
while (i < 10) {
    console.log(i);
    i += 1;
}
alert('Wow');