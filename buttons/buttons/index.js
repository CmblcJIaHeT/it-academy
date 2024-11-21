//Функци
//function sum() {
//Тело функции
//}

//Пример функции в JavaScipt
function sayHello()       {
    alert("privet");
}

//вызов функции
sayHello();

//Получить кнопку и html
let button = document.getElementById("button");

//Вызвать функцию при нажатии на кнопку
button.addEventListener("click", sayHello);

//калькулятор
function sumOfNumbers() {
    //Получение первого числа
let input1 = document.getElementById("first")

//получение второго числа
let input2 = document.getElementById("second")

//Число ведённое в первое числовое поле
let firstNumber = input1.value

//Число ведённое в второе числовое поле
let secondNumber = input2.value

//Сумма введёных чисел 
let sum = +firstNumber + +secondNumber;

// получаем span элемент со значением суммы
let span = document.getElementById("sum");
//Подставляем найденную сумму в span
span.innerText = sum;
}




//получаем кнопку для нахождуния суммы
let sumButton = document.getElementById("sum-button")
sumButton.addEventListener("click", sumOfNumbers )

//dopolnitelnoe
let body = document.body;


//izmenenie background
body.style.background = "orange"


































