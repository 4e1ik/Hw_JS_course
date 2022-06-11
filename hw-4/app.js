'use strict'
/////////////
///OBJECTS\\\
/////////////

///Task 1\\\

// let obj = {
//     eyes: 2,
//     ears: 2,
// }

// delete obj.ears;
// delete obj.eyes;

// console.log(`${'eyes' in obj}`);

///////////////////

///Task 2\\\

// let OBJ = {
//     eyes: 2,
//     ears: 2,
// }

// console.log(`${'eyes' in OBJ}`);

///////////////////

///Task 3\\\

// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
// }

// for (let key in student) {
//     console.log(key, student[key]);
// }

// for (let key in student) {
//     console.log(student[key]);
// }

// Ну, как я понял, нучто примерно так сделать, потому что как сделать в одном
// цикле я пока еще не догадался...

///////////////////

///Task 4\\\

// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };

// console.log(colors['ru pum pu ru rum'].red, colors['ru pum pu ru rum'].blue);

///////////////////

///Task 5\\\

// let salaries = {
//     andrey: 500,
//     sveta: 413,
//     anton: 987,
//     andrey: 664,
//     alexandra: 199
// }

// let mid = 0;
// let i = 0;

// for(let key in salaries){
//     mid+=salaries[key]
//     i++;
// }

// console.log(mid/i);
// console.log((500+413+987+664+199)/5);

///////////////////

///Task 6\\\

// let login = prompt("Введите ваш логин!");
// let password = prompt("Введите ваш пароль!");

// let Validator = {
//     login,
//     password,
// }

// let login_2 = prompt("Подтвердите ваше логин!");
// let password_2 = prompt("Подтвердите ваше пароль!");

// if((Validator.login === login_2)&&(Validator.password === password_2)) {
//     console.log("Добро пожаловать!");
// } else {
//     console.log("Посторонним вход воспрещен!");
// }

//Исправил,  просто забыл про валидатор при написании))

///ADVANCED level\\\

///Task 1\\\

// let count = prompt('Введите счет матча в формате "x:y", но помните, что голов не может быть больше 9');

// let Count = {
//     count,
// }

// let newCount = Count.count.split(':');

// let goodCount = '';

// const ONE = 'Один'
// const TWO  = 'Два'
// const THREE = 'Три'
// const FOUR = 'Четыре'
// const FIVE = 'Пять'
// const SIX = 'Шесть'
// const SEVEN = 'Семь'
// const EIGHT = 'Восемь'
// const NINE = 'Девять'
// const ZERO = 'Ноль'

// for (let i = 0; i<newCount.length; i++){
//     switch(newCount[i]){
//         case '1':{
//             goodCount+=ONE+':'
//             break
//         }
//         case '2':{
//             goodCount+=TWO+':'
//             break
//         }
//         case '3':{
//             goodCount+=THREE+':'
//             break
//         }
//         case '4':{
//             goodCount+=FOUR+':'
//             break
//         }
//         case '5':{
//             goodCount+=FIVE+':'
//             break
//         }
//         case '6':{
//             goodCount+=SIX+':'
//             break
//         }
//         case '7':{
//             goodCount+=SEVEN+':'
//             break
//         }
//         case '8':{
//             goodCount+=EIGHT+':'
//             break
//         }
//         case '9':{
//             goodCount+=NINE+':'
//             break
//         }
//         case '0':{
//             goodCount+=ZERO+':'
//             break
//         }
//         default:{
//             console.log('Введен неверный формат');
//         }
//     }
// }

// console.log(`${goodCount.slice(0,-1)}`);

// Сделал через объект

///Task 2\\\

// let student1 = {
//     name: 'Polina',
//     age: 27,
// }

// let student2 = {
//     name: 'Polina',
//     age: 27,
// }

// console.log(JSON.stringify(student1) === JSON.stringify(student2));

///Task 3\\\

// const animals = {
//     cat: {
//        name: 'Енчик',
//        age: 3,
//     },
//     dog: {
//        name: 'Орео',
//        age: 2,
//     }
//  }

// console.log(animals.bird?.name);

// console.log('hello');

/////////////
///ARRAYS\\\
/////////////

///Task 1\\\

// const colors = ['red', 'green', 'blue']

// console.log(colors.length);

///Task 2\\\

// const animals = ['monkey', 'dog', 'cat','wrvfwr','wvwvw']

// console.log(animals.at(animals.length-1));
// console.log(animals[animals.length-1]);

// Прикольно, даже и не знал, что такой метод есть

///Task 3\\\

// const numbers = [5, 43, 63, 23, 90]
///////////////////////////////////////////////////////

// console.log(numbers.splice(0, -numbers.length));

///////////////////////////////////////////////////////

// console.log(numbers.slice(0,-numbers.length));

// Как это так работает? Если этот метод 

///////////////////////////////////////////////////////

// let a = numbers.length

// for (let i = 0; i< a; i++) {
//     numbers.shift()
// }

// console.log(numbers);

///Task 4\\\

// const students = ['Polina', 'Dasha', 'Masha']

// students.splice(0,1,'Andrey')
// students.splice(students.length-1,1,'Botya')

// console.log(students);

///Task 5\\\

// const cats = ['Gachito', 'Tom', 'Batman']

// let lendth = cats.length;

// for (let i = 0; i<lendth; i++){
//     console.log(`Kichu-kichu ${cats[i]}`);
// }

// for (let i of cats) {
//     console.log(`Kichu-kichu ${i}`);
// }

///Task 6\\\

// const evenNumbers = [2, 4, 6, 8, 10]
// const oddNumbers = [1, 3, 5, 7, 9]

// let newArr = [...evenNumbers, ...oddNumbers]

// for (let i = 0; i<newArr.length;i++) {
//     if (newArr[i]===8){
//         console.log(`Индекс числа 8 - ${i}`);
//     }
// }

///Task 7\\\

// let arr = [0, 0, 0, 0]

// arr=''+arr

// arr = arr.split(',').join('1')

// console.log(arr);

// Даааа, как все просто оказалось...

///ADVANCED level\\\

///Task 1\\\

// let palind = prompt('Вевдите слово, которое хотите проверить')

// let arr = palind.split('')
// let secArr = palind.split('').reverse()

// for (let i = 0; i<arr.length; i++){
//     if(arr[i]!==secArr[i]){
//         console.log('Слово не полиндром');
//         break
//     } else {
//         console.log(`Есть ${i+1} - совпадение`);
//     }
// }

// Ну да, касательно countinue я тупанул)

///Task 2\\\

// const matrix = [
//     [12, 98, 78, 65, 23],
//     [54, 76, 98, 43, 65],
//     [13, 324, 65, 312],
//     [9092, 22, 45, 90000],
// ]

// let a = 0;
// let b = 0;
// let split = 0

// for (let row = 0; row < matrix.length; row++ ){

//     b=b+a

//     for (let cols = 0; cols < matrix[row].length; cols++){

//         a=a+matrix[row][cols]

//         split++
//     }
// }


// console.log(a/split);

///Task 3\\\

// const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]

// let positive = []
// let negative = []

// for (let i = 0; i < mixedNumbers.length; i++) {
//     if (mixedNumbers[i]===0 || mixedNumbers[i]>0){
//         positive+=mixedNumbers[i]+','
//     } else {
//         negative+=mixedNumbers[i]+','
//     }
    
// }

// console.log(positive.split(',').slice(0,-1));
// console.log(negative.split(',').slice(0,-1));

// забыл про && :)

///Task 4\\\

// let firstArrRand = []
// let secondArrRand = []

// function getRandomInRange(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// for (let i = 0; i < 5; i++) {
    
//     firstArrRand[i]=getRandomInRange(1, 100)
// }

// console.log(firstArrRand);

// for (let i = 0; i < 5; i++) {
    
//     secondArrRand[i]=(firstArrRand[i])**3
// }

// console.log(secondArrRand);