"use strict"
const num = +prompt('write number');
let result;
if (num < 5) {
    result = 0;
} else if (num > 5) {
    result = 1;
}
console.log(result);

//Запросите у пользователя число и запишите его в переменную. 
//(Не забывайте, что от пользователя мы всегда получаем строку).
//Создайте переменную - результат и присвойте ей значение: если введенное пользователем число меньше 5, то результат будет '0', если больше - '1'.Выведите результат в консоль.