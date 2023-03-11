console.log("Hello world!");
/*
    1. Переменные
    2. Операторы сравнения
    3. Циклы
    4. Функции
    5. Массивы
    6. Объекты
    7. DOM
*/

    /* Типы переменных */
var a = 3.14; // number
var b = "London"; //string
var c = true; //boolean (логический тип)
var d = null; //null
var e;  // undefined
var f = {name : "Ivan"} // object
    

    /* Операторы сравнения */
var a = 3;
var b = 4; 

console.log(a < b);  //меньше            (true)
console.log(a > b);  //больше            (false)  
console.log(a == b); //равно             (false)
console.log(a <= b); //меньше или равно  (true)
console.log(a != b); // не равно         (true)

var x = 10;
var y = 20;

if(x >= 10 && y < 30){ // && - И
    console.log("x больше 10 и у меньше 30");
}

if(x > 10 || y < 30){  // || - ИЛИ
    console.log("x больше 10 или у меньше 30")
} 

    /* Циклы */
    // WHILE - пока
var candies = 10;

while(candies > 0) {
    console.log("открыть коробку"); 
    console.log("достать конфету")
    console.log("съесть конфету")
    console.log("закрыть коробку")
    candies--;
    console.log(candies)
}
    // FOR - для
for (var i = 0; i < 5; i++){
    console.log(i);
}

    /*Функции*/
    
var firstName = 'Дмитрий';
var age = 20;

if (age > 18) {
    console.log(firstName + ' Идет в армию');
}else {
    console.log(firstName + ' продолжает ходить на дискотеку');
}

var firstName = 'Михаил';
var age = 21;

if (age > 18) {
    console.log(firstName + ' идет в армию');
}else {
    console.log(firstName + ' продолжает ходить на дискотеку');
}

    var firstName = 'Алексей';
var age = 17;

if (age > 18) {
    console.log(firstName + ' идет в армию');
}
else {
    console.log(firstName + ' продолжает ходить на дискотеку');
}
// упрощаем конструкцию при помощи написания функции 

function checkAge(name, age){
    if(age >= 18){
        console.log(name + ' идет в армию')
    }   
    else {
        console.log(name + ' продолжает ходить на дискотеку')
    }
} 
checkAge('Дмитрий', 20);
checkAge('Михаил', 21);
checkAge('Алексей', 17);

    /* Массивы */

var students = ['Кирилл Шитов', 'Иван Иванов', 'Олег Олегов'];
var cities = ['Moskow', 'St.Piter', 'Voronesh', '22', true];
var colors = ['green', 'red', 'black'];
var numbers = [1, 34, 56];
console.log(students[2]);
console.log(colors[1]);
console.log(cities[4]);

    /*Объекты*/

    //sample 1
var carBMW = {
    model: 'BMW',
    country: 'Germany',
    year: 2009,
    color: 'red',
    wheels: {
        radius: 18,
        type: 'ASD'
    }
}
console.log(carBMW.wheels)

    //sample 2
var user1 = {
    firstName: 'Frank',
    lastName: 'Ivanov',
    sayHello : function(){
        console.log('всем привет, от ' + this.firstName);
    }
}
var user2 = {
    firstName: 'Ivan',
    lastName: 'Fedorov',
    sayHello : function() {
        console.log('всем привет, от ' + this.firstName);
    }
}
user1.sayHello();
user2.sayHello();

    /*DOM*/
//Document Object Model//

var html = document.getElementById('html'); //document - библиотека свойств
var css = document.getElementById('css');
var js = document.getElementById('js');
console.log(html.innerHTML); //inner - метод или свойство объекта html
console.log(css.innerHTML);
console.log(js.innerHTML);