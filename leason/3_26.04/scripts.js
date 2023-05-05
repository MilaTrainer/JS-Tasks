'use strict';


//обекты

let user = { name: 'Mila', age: 28, gender: 'Female' };


//homework
//работа с полями
let userProperty;
userProperty = ('gender');
user[userProperty];
console.log(user[userProperty]);

userProperty = 'age';
user[userProperty];

alert(user[userProperty]);

let nameProperty = 'name',
    ageProperty = 'age',
    genderproperty = 'gender';
girlUser = {
    [nameProperty]: 'Mila',
    [ageProperty]: 28,
    [genderproperty]: 'Female'
}

alert(girlUser[nameProperty]);
//обход полей обьекта
//let in








//Нужно обратиться к полю, ключ которого мы не знаем, но знаем, что оно представляет из себя число ?

const userObj = {
    userName: 'Alex',
    age: 25,
    city: 'Minsk',
    email: 'alex@123@gamil.com',
    isLoaded: true,
};

for (let key in userObj) {
    (userObj[key])