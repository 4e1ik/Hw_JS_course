'use strict'
//////////////
///Part One\\\
//////////////

///Task 1\\\

// let number = prompt('Введите ваше число')

// function getSum (){

//     let a =  0;
    
//     for(let i = 0; i<= number; i++){
//         a=a+i
//     }
    
//     console.log(a);
// }

// getSum();

///Task 2\\\

// let sum = prompt('Введите сумму кредита')

// const PERCENT = 0.17
// const YEARS = 5

// function overPayment(summ) {

//     let overPay = 0

//     for (let i = 0; i < YEARS; i++) {
//         overPay += summ * PERCENT
//     }

//     console.log(`Сумма перeплаты составит - ${overPay}`);
// }

// overPayment(sum)

// Вроде так, но мне кажется, что задание выполнено не совсем верно

///Task 3\\\

// let string = prompt('Введите строку')
// let from = prompt ('Введите номер символа с какого хотите обрезать строку')
// let to = prompt ('Введите номер символа по какой хотите обрезать строку')

// function trimString(str, fr=+fr, t=+t) {
    
//     let arr = str.split('')

//     arr = arr.splice(fr-1)
//     arr = arr.slice(0,t-fr+1)

//     console.log(arr);
// }

// trimString(string, from, to)

///Task 4\\\

// let string = prompt('Введите число')

// function getSumNumbers(stringTo) {

//     let numbers = stringTo.split('')

//     let sum = 0

//     for (let i = 0; i < numbers.length; i++) {
        
//         sum+=+numbers[i]     
//     }

//     console.log(sum);
// }

// getSumNumbers(string)

///Task 5\\\

// let x = prompt('Введите x')
// let y = prompt('Введите y')

// function getSumNumbers(X,Y) {

//     let sum = 0

//     if (X===Y) {
//         console.log(X);
//     } else if (Y>X) {
//         for (let i = X; i <= Y; i++) {
        
//             sum+=+i
//         }

//         console.log(sum);

//     } else if (X>Y) {
//         for (let i = Y; i <= X; i++) {
        
//             sum+=+i
//         }

//         console.log(sum);

//     } else {
        
//     }
// }

// getSumNumbers(x,y)

///Task 6\\\

// let bool = true;

// function fooboo (Bool, Foo, Boo) {

//     // let Foo = this.foo()
//     // let Boo = this.boo()

//     if (Bool===true){
//         foo()
//     } else {
//         boo()
//     }
// }

// function foo () {
//     console.log('foo');
// }

// function boo () {
//     console.log('boo');
// }

// fooboo(bool, foo(), boo())

////////////////////
///ADVANCED level\\\
////////////////////

///Task 1\\\

// let a = +prompt('Введите первую сторону труегольника')
// let b = +prompt('Введите вторую сторону труегольника')
// let c = +prompt('Введите третью сторону труегольника')

// function triangle(A,B,C) {
//     if (A<(B+C) && B<(A+C) && C<(A+B)) {
//         // return true
//         console.log(true);
//     } else {
//         // return false
//         console.log(false);
//     }
// }

// triangle(a,b,c)


///Task 2\\\

// let x = +prompt('Введите x')
// let y = +prompt('Введите y')

// function chocolate(X,Y) {

//     if (X===0 || Y===0) {

//         console.log(`Введены неверные данные => ${X}:${Y}`);

//     } else if (X===1 || Y===1) {

//         if (X===1 && Y===1){
//             console.log(`Надломов не требуется`);
//         } else if (X===1){
//             console.log(Y-1);
//         } else if (Y===1){
//             console.log(X-1);
//         }

//     } else {
//         console.log(X*Y);
//     }
// }

// chocolate(x,y)

///Task 3\\\



///NORMAL LEVEL\\\

///Task 1\\\

// const fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

// function forEach () {
//     fibonacci.forEach( el => {
//         console.log(el);
//     })
// }

// let forEach = function() {
//     fibonacci.forEach(
//         function(el) {
//             console.log(el);
//         }
//     )
// }

// forEach()

///Task 2\\\

// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

// function newUsers() {

//     let newUsers = users.map((item, index) => `member ${index+1}: ${item}`)

//     console.log(newUsers);
// }

// const newUsers =  function() {

//     let newUsers = users.map((item, index) => `member ${index+1}: ${item}`)

//     console.log(newUsers);
// }

// newUsers()

///Task 3\\\

// const numbers = [7, -4, 32, -90, 54, 32, -21]

// let newNumbers = numbers.filter(item => item > 0)

// console.log(newNumbers);

// function newNumbers() {
//     let newNumbers = numbers.filter(item => item > 0)

//     console.log(newNumbers);
// }

// newNumbers()

// let newNumbers = function() {

//     let newNumbers = numbers.filter(item => item > 0)

//     console.log(newNumbers);
// }

// newNumbers()

///Task 4\\\

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

// let sum = fibonacci.reduce((summ, item) => summ+item)

// console.log(sum);

// function sum() {
//     let sum = fibonacci.reduce((summ, item) => summ+item)

//     console.log(sum);
// }

// sum()

// let sum = function () {
//     let sum = fibonacci.reduce((summ, item) => summ+item)

//     console.log(sum);
// }

// sum()

///Task 5\\\

// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

// let newNumbers = numbers.find(item => item%2==0)

// console.log(newNumbers);

// let newNumbers = function() {
//     let newNumbers = numbers.find(item => item%2==0)

//     console.log(newNumbers);
// }

// newNumbers()

// function newNumbers () {
//     let newNumbers = numbers.find(item => item%2==0)

//     console.log(newNumbers);    
// }

// newNumbers()

///ADVANCED LEVEL\\\

///Task 1\\\

// function Student(name, rate, salary) {
//     this.name = name
//     this.rate = rate
//     this.salary = salary

//     this.sumCredit = sumCredit
// }

// function sumCredit(){

//     switch (this.rate) {
//         case 'A':{
//             return 12 * this.salary
//         }

//         case 'B':{
//             return 8 * this.salary
//         }

//         case 'C':{
//             return 6 * this.salary
//         }

//         case 'D':{
//             return 0 * this.salary
//         }
    
//         default:{
//             break;
//         }
//     }
// }

// let limit = prompt('Сколько студентов вы хотите ввести?')

// let newStudents = []

// for (let i = 0; i < limit; i++) {
    
//     let student = new Student(prompt('имя студента'), prompt('рейтинг студента (A, B, С или D)'), +prompt('зарплата студента'))

//     for (let j = 0; j < 1; j++) {
        
//         newStudents[i] = student
//     }
// }

// let summ = 0;

// function sumCreditSalary () {
//     for (let i = 0; i < newStudents.length; i++) {
        
//         summ+=newStudents[i].sumCredit()
//     }

//     console.log(`Сумма возможных кредитов группы студентов равна ${summ} зарплат`);
// }

// sumCreditSalary()

///Task 2\\\

// let string = prompt('Введите вашу строку, а мы удалим из нее все гласные кроме "y"')
// let result =''
// let newString = string.split('').filter(item => item !=='a' && item !=='A'&& item !=='e'&& item !=='E' && item !=='i' && item !=='I' && item !=='o' && item !=='O' && item !=='u' && item !=='U').forEach(function(item){
//     result+=item
// })

// console.log(result);

///Task 3\\\

// let accum = prompt('Введите вашу строку')

// function func(accum) {

//     let result = ''

//     for (let i = 0; i < accum.length; i++) {

//         result+=accum.charAt(i)
        
//         for (let j = 0; j < i; j++) {
            
//             result+=accum.charAt(i)
//         }
//     }

//     console.log(result);
// }

// func(accum)

///Task 4\\\

// function compare(a,b) {
//     if (a > b) return 1
//     if (a == b) return 0
//     if (a < b) return -1
// }

// let numbers = prompt('Введите строку чисел, разделенных пробелами')

// let newNumbers = numbers.split(' ').filter(item => item !== ' ')

// let result = ''

// for (let i = 0; i < newNumbers.length; i++) {
    
//     newNumbers[i]=+newNumbers[i]
// }

// newNumbers = newNumbers.sort(compare)

// console.log(`${newNumbers[newNumbers.length-1]} ${newNumbers[0]}`);

///Task 5\\\

// let string = prompt('Введите ваше слово для проверки')

// let result =[]

// function check(string) {
//     string = string.toUpperCase()

//     for (let i = 0; i < string.length; i++) {
        
//         result[i]=string.charAt(i)
//     }

//     for (let i = 0; i < result.length; i++) {
//         for (let j = (i+1); j < result.length; j++) {
            
//             if (result[i]===result[j]){
//                 console.log('Слово не является изограммой');
//             }
//         }    
//     }
// }

// check(string)

///Task 6\\\

// let string = prompt('Введите ваше слово')

// let total = ''
// let total2 =[]
// let sum1 = 0
// let sum2 = 0

// for (let i = 0; i < string.length; i++) {
//     total+=string[i].charCodeAt()
// }

// for (let i = 0; i < total.length; i++) {
//     sum1+=+total.charAt(i)
//     total2[i]=+total.charAt(i)
//     if (total2[i]===7) {
//         total2[i] = 1
//     }
// }

// total2.map(el => sum2+=el)
// console.log(sum1 - sum2);

///Task 7\\\

// let result = ''

// for (let i = 0; i < string.length; i++) {
//     for (let j = i+1; j < string.length; j++) {
        
//         if(string.charAt(i)===string.charAt(j)){
//             result+=')'
//             // result+=string.charAt(i) = ')'
//         } else {
//             result+='('
//             // string.charAt(i) = '('
//         }
//     }
// }

// console.log(result);
let string = prompt('Введите ваше слово для проверки').toUpperCase()

let result = []
for (let i = 0; i < string.length; i++) {
    
    result[i]=string.charAt(i)
}

for (let i = 0; i < result.length; i++) {
    result.filter(item, index, array => {
        if (array[index]=ar){
            
        }
    })
}

console.log(string);
console.log(result);


// let result =[]
// let newResult=[]

// for (let i = 0; i < string.length; i++) {
        
//     result[i]=string.charAt(i)
// }

// for (let i = 0; i < result.length; i++) {
//     for (let j = 0; j < result.length; j++) {
//         if(result[i]===result[j]){
//             newResult[i]='1'
//         } else {
//             newResult[i]='0'
//         }
//     }
// }

// console.log(result);
// console.log(newResult);

