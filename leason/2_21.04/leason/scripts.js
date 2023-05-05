'use strict';

//----функция----

// () для аргументов
let result = 5;

function getValue() {
    result = result + 11;
}

getValue();
console.log(result);


// num - создаем аргумент, это то, что мы будем передавать при вызова функции 
// return переносит данные из функции
function getValue1(num) {
    const result = 200 + 300 + num;
    return result;
}

//все 3 разные
// const maks = getValue1;
// const kirill = 200 + 300 + 600;     без аргументов
// const egor = 200 + 300 + 700;

const maks = getValue1(500);
const kirill = getValue1(600); //с арнументами
const egor = getValue1(700);
console.log(egor);


//-----аргумент------ 

//аргументу num  можно присвоить число, и тогда если его не будет в переменной, 
//то будет как раз подставлять это значение 
//то есть num = 100 

function getValue2(num = 100) {
    const result = 200 + 300 + num;
    return result;
}

const maks1 = getValue2(500);
const kirill1 = getValue2(); // не поставляем 
//без числа, значит подствится аргумент , num = 100
const egor1 = getValue2(700);
console.log(egor1);

//ниже  все 3 разных аргумента будут передаваться в функцию

function getValue3(a, b, c) {
    const result = a + b + c;
    return result;
}


const maks2 = getValue3(100, 30, 500); //дефолтное значение в скобках
const kirill2 = getValue3(20, 30, 5);
const egor2 = getValue3(700, 1, 5);
console.log(egor2);


// когда переменная за функцией, она каждый раз измеятся
//сначоа 15, потом 81 строчка вызывает снова 
//и внутри функции к переменной прибавляется 1
// выводится в кослоль 16
//далее эта 16 идет во внутрь функции, т к вызывает 82 строчка,  и к ней снова +1 
//получается 17
// 3 ий круг также 



let a = 15;

function getResult() {

    ++a; //16  17  18 
    console.log(a);

}

getResult(); //1 ий круг     16
getResult(); //2 ий круг     17
getResult(); //3 ий круг     18



//циклы
//for
// 1. cоздать переменную, счетчик
// 2. это условие ,    пока i больше 10 - крутись 
// 3. увеличение на единицу



for (let i = 0; i < 10; i++) {
    console.log(i);
};



// бесконечный цикл - синтаксис ;

// let i = 10;
// for (;;) {
//     i++;
// }
// if (i > 20) {
//     break; //останови цикл
// }

// console.log(i);
// }
//while


function sayHello(string) {
    if (string == 'Mila') {
        return;
    }
    console.log(string);
}
sayHello('Mila');



// тернальный оператор
function sayHello(string) {
    string == 'Mil' ? null : console.log('Anna');
}
sayHello('Mila');

//тернальный 

1 > 2 ? console.log(true) : a > b ? console.log(false) : true;

//переводим его в условный 
//так как двойные вложенности лучше использовать в условном + свич кейс

if (1 > 2) {
    if (a > b) {
        console.log(false) //  если выполниться это условие 1
            //можно остановитт условие прописать тут
            //return 
    }
    return true; // то это условие выполняться не будет 2
}


const result1 = 1 > 2 ? false : a > b ? true : false;