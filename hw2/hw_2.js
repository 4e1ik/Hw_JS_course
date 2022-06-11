'use strict'

//Task 1\\

let x = 20;
let y = 58;
let z = 42;

console.log(x + y + z);

//Task 2\\

const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DAYS_IN_YEAR = 365;

let myAgeInSeconds = prompt('Введите ваш возраст в годах.')

console.log(`Ваш возраст в секундах составляет: ${myAgeInSeconds*DAYS_IN_YEAR*HOURS_IN_DAY*MIN_IN_HOUR*SEC_IN_MIN} секунды`);

//Task 3\\

let count = 42;
let userName = '42';

let numInString = String(count);
let stringInNum = +userName;

console.log(`${typeof numInString} ${typeof stringInNum}`)

let numInString_var2 = '' + count;
let stringInNum_var2 = Number(userName);

console.log(`${typeof stringInNum_var2} ${typeof numInString_var2}`)

//Task 4\\

let a = 1;
let b = 2;
let c = "белых медведей";

// let  stringA = '' + a;
// let  stringB = '' + b;

// console.log(stringA + stringB + c );
// console.log(`${stringA + stringB + c}`);


// Надеюсь, что это решение верное :)
// Или можно было проводить преобразования переменных?

console.log(`${'' + a + b + " " + c}`);

//Task 5\\

let access = 'доступ';
let marine = 'морпех';
let icing = 'наледь';
let cross = 'попрек';
let chopping = 'рубило';

let lengthWords = access + marine + icing + cross + chopping;
console.log (lengthWords.length);

//Task 6\\

let numb = 12;
let str = "привет"
let bool = true;

console.log(`Variable: ${numb} have type: ${typeof numb}`);
console.log(`Variable: ${str} have type: ${typeof str}`);
console.log(`Variable: ${bool} have type: ${typeof bool}`);

//Task 7\\

let name = prompt("Введите ваше имя");
let age = prompt("Введите ваш возраст в полных годах");

console.log(`Ваше имя - ${name}`);
console.log(`Ваш возраст - ${age} лет/года/год`);


//Task adv lvl 1\\

let f = 4;
let g = 3;

f=f+g;
g=f-g;
f=f-g;

console.log(f,g);

//Task adv lvl 2\\

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1[1]+codeWord2[1]+codeWord3[1]+codeWord4[1]+codeWord5[1];

console.log(cipher);