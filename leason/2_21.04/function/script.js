'use strict'
//Фунция
//умнажает, cкладывает 2 числа
let number = 55;
let num = 3;

function multNumbers(num1, num2) {
    /*let num1 = 5;
    let num2 = 3;*/
    let result = num1 * num2;
    //console.log(result);
    return result;

}
multNumbers(4, number);

console.log(`Произведения ${ number } и ${ num } - ${ multNumbers(number, num) }`);

//  ()- указываем параметры
// {} - сама логика, тут идет подсчет с  циклом   
function getSum(min, max) {
    let sum = 0;
    //начальное значение сщетчика равняется минимум = min 
    //далее щетчик  нашего цикла должен быть меньше или равно max    
    // твким образом цикл будет обходить все числа , i - принимает от min  до max  c шагом один на каждом круге i++
    // значит число будет увеличиваться на 1
    for (let i = min; i <= max; i++) {
        sum += i; //sum = sum + i
    }

    return sum; //вернуть параметры из функци
}
console.log(getSum(1, 10)); //считаем числа от 1 до 10
console.log(getSum(57, 74));
console.log(getSum(2, multNumbers(3, num)));
// в качесве max стоит выражение , его нужно сначало вычеслить 
//JS  сначала вычеслит ' multNumbers(3, num) ' вот это выражение 
// запустить функцию multNumbers  с указанными параметрами (3, num)
// рeкзультат этой функции  передастся в max (в качестве максимума)  - в другую фунцию getSum