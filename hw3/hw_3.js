'use strict'

///Task 1\\\

let str = 'true';
let bool = false;
let num = 17;
let undf = undefined;
let nul = null;

console.log(typeof str);
console.log(typeof bool);
console.log(typeof num);
console.log(typeof undf);
console.log(typeof nul);

// Или нужно было через цикл?

///Task 2\\\

let height = 15;
let width = 20;

if(height>width) {
    console.log(height);
} else {
    console.log(width);
}

///Task 3\\\

let result = '';

for(let i = 1; i<20; i++){
    if(i%3==0){
        result+=i+' ';
    }else {
        continue;
    }
}
console.log(result);

///Task 4\\\

let key = true
let documents = false
let pen = true
let apple = false
let orange = true

console.log(key&&documents&&pen&&(apple||orange) == true?"Вы можете идти на работу":"Вы не можете идти на работу");

//Ну да, так явно лучше))

///Task 5\\

let number = prompt("Введите ваше число!")

if ((number%3)&&(number%5)){
    console.log("FizBuz");
} else if (number%5) {
    console.log("Fiz");
} else if (number%3) {
    console.log("Buz");
} else {
    console.log("Число не кратно 3 и 5");
}

///Task 6\\\

let age = prompt("Введите ваш возраст!")

if(age>=18){
    console.log("Попей пивка");
} else if(age>=16) {
    console.log("Можешь выкурить сигаретку, только маме не говори");
} else {
    console.log("Пей колу");
}

///Task 7\\\

let direction = prompt("Введите направление в котором вы хотите отправиться!").toLowerCase();

switch(direction){
    case 'юг':{
        console.log("на юг пойдешь счастье найдешь");
        break;
    }
    case 'запад':{
        console.log("на запад пойдешь верного друга найдешь");
        break;
    }
    case 'восток':{
        console.log("на восток пойдешь разработчиком станешь");
        break;
    }
    case 'север':{
        console.log("на север пойдешь много денег найдешь");
        break;
    }
}

/////ADVANCED LEVEL\\\\\\\

///Task 1\\\

let nam = prompt("Введите ваше имя и фамилию!").toLowerCase();
let goodName ='';

for(let i = 0; i<nam.length;i++){

    if (i===0){
        goodName+=nam[i].toUpperCase();
    } else if (nam[i]===' '){
        goodName+=nam[i];
        goodName+=nam[i+1].toUpperCase();
        i++
    } else {
        goodName+=nam[i];
    }
}

alert(`Привет, ${goodName}`);

///Task 2\\\

let NUMBER = +prompt("Введите ваше число");
let minus = +prompt("Сколько отнять?");
let plus = +prompt("Сколько прибавить?");
let multiply = +prompt("На сколько умнижить?");
let divide = +prompt("На сколько разделить?");
let total = (((NUMBER - minus) + plus) * multiply) / divide;

alert(`Ваш результат равен - ((((${NUMBER} - ${minus}) + ${plus}) * ${multiply}) / ${divide}) = ${total}`)

// при вводе первого числа равного двойке, а остальные ввести еденицы
// то результат выводит почему-то 11, а не 2...

///Task 3\\\

let symbol = "#"
let RESULT = ''

for (let i = 0;i<6;i++){
    RESULT+=symbol;
    console.log(RESULT);
}