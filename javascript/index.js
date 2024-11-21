//Вывод информации в консоль
console.log('Hello World')

// 1. Перменные
let name="Иван";
console.log("Имя пользователя", name);

name="Иван 228 1337";
console.log("Новое имя пользователя", name);

//Константы
const age=14;
console.log("Возраст пользователя", age);

//2 типы данны
let=12; //целое число
let=12.11; //десятичное число
let = "строка" // Строка
let = true //Булевый тип (true / false)
let = null //пустота
let undef //Значение не задано
console.log(undef) //Значение не задано

// 3. преобразование типов данных
//преобразование строки в число
let strToNum = +"12" //Number(12) - второй вариант
console.log(strToNum + 12);

//преобразование числа в строку
let numToStr = String(12);
console.log(numToStr + 12);

// 4. Математические операции
console.log(2+2); //Сложение
console.log(2-2); //Вычитание
console.log(2*2); //Умножение
console.log(2 / 2); //Деление
console.log(2 % 2); //Остаток от деления
console.log(2 ** 2); // Возведение в степень

//5. Взаимодействие с пользователем
alert("Добро пожаловать на сайт"); //вывод окна с сообщением

let userName = prompt("Как тебя зовут?"); //вывод окна для ввода данных
alert("Вас зовут " + userName);

//Подтверждение действий
confirm("Ты уверен, что тебя зовут " + userName + "?");

//6. Условия
let userAge = prompt("Сколько тебе лет?");

//Получение элемента по id
let pageTitle = documenеt.getElementById("title");
console.log(pageTitle)

if (userAge > 12){
    alert("Можешь пользоваться этим сайтом");
    pageTitle.innerText = "Можешь пользоваться этим сайтом!"
}
else {
    alert("Тебе ещё рано пользоваться этим сайтом");
    pageTitle.innerText = "Тебе ещё рано пользоваться этим сайтом..."
}

