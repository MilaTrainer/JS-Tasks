'use strict';

let r = 10;
let g = r; //10
r == g; // true
// приметивные типы данных



//обьекты, второй тип данных (html, function, - это обькты )
// userObj == поле(это все вместе)       name == свойство/ ключ        28/ Mila- это значение
// может хранить абсолютно любые типы данных
const userObject = {
    userName: 'Mila',
    age: 28,
    gender: 'Female',
    isLoaded: false,
    email: 'alex2@gmail.com',
    // method: function() {
    //    console.log(12);
    ValidDate: {
        password: 'password',
        'login-1': 'alex123',

    },
    func: function(num) { CSSConditionRule.log(num); } //это метод обекта,не функция
        // функция , которая находится внутри обьекта
};

//userObj.func(2);

// удаление поля 

delete userObject.userName;

userObject.age = 35; //обращаемся к обекту, затем к ключу и меняем его
userObject.age1 = 45; //создаем  новый ключ  age+

// в новый обьект закинем инфу о другом обьекте
//создали новый обьект 
const newUserObject = userObject;
newUserObject.firstName = 'Mironov'; //добавила новое поле 

console.log(newUserObject);
console.log(userObject); // и тут появилось firstName
//это новое поле  (firstName) добавилось в старое 
// обьект передается по ссылке, не по значению


console.log(userObject == newUserObject); // true







//когда свойсво в кавычках/ некорретный ключ
//  23 строка 'login-1', 
// то квадратные/ фигурные скобки [] кавычки 
alert(userObject.ValidDate['login-1'], )

const keys = 'age'; // userObject.age
// в перменной лежит ключ
//обьявляем переменную в []

console.log(userObject[keys])



console.log(userObject.ValidDate.password);
// console.log(userObject.city);
// как вызываем , сначала название обьекта, потом второй вложенный обект, 
//и после уже свойсво

//чтобы получить значение, надо обратиться к ключу

console.log(userObject.ValidDate['login-1'])
    // если свойсво записано строкой , то []







// способы копирования обьектов, есть 2 метода копирования 
// глубокое и поверхностное копирование 

//1. глубокое, копирует все вложенности, которые внутри
// на нескольких уровнях вложенности - передает ссылку

// метод из JS

// 2. поверхностное , только 1ый уровень вложенности
// newUserObject =
//     newUserObject.age = 20;

//можно сделать через цикл поверхностное копирование
// for in -для обектов (1.спооб поверхностного копирования)
for (let key1 in userObject) {
    console.log(userObject[key1]);
}

// for (переменная      in     обьект,который мы хотим копировать)
for (let key1 in userObject) {
    if (typeof userObject[key1] == 'number') {
        console.log(userObject[key1]);
    }
}

//  чтобы склрировать обьект 
//создаем пустой обект, с помощью цикла начинаем заполнять 

const cloneuserObject = {};
for (let key2 in userObject) {
    cloneuserObject[key2] = userObject[key2];
}
console.log(userObject);
console.log(cloneuserObject);
console.log(cloneuserObject == userObject);

// 2 способ поверхносного копировния
const cloneOBJ = {...userObject };

console.log(cloneOBJ);






//homework
//работа с полями
// let userProperty;
// userProperty = ('gender');
// user[userProperty];
// console.log(user[userProperty]);

// userProperty = 'age';
// user[userProperty];

// alert(user[userProperty]);

// let nameProperty = 'name',
//     ageProperty = 'age',
//     genderproperty = 'gender';
// girlUser = {
//     [nameProperty]: 'Mila',
//     [ageProperty]: 28,
//     [genderproperty]: 'Female'
// }

// alert(girlUser[nameProperty]);
//обход полей обьекта
//let in








//Нужно обратиться к полю, ключ которого мы не знаем, но знаем, что оно представляет из себя число ?

// const userObj = {
//     userName: 'Alex',
//     age: 25,
//     city: 'Minsk',
//     email: 'alex@123@gamil.com',
//     isLoaded: true,
// };

// for (let key in userObj) {
//     (userObj[key])
// }