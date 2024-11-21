alert("Добро пожаловать на сайт! Давай почситаем два числа")

let firstNumber = +prompt("Введите первое число")

let secondNumber = +prompt("Введите второе число")

let summa = firstNumber + secondNumber //сумма
let raznost = firstNumber - secondNumber //разность
let proizvedenie = firstNumber * secondNumber //произведение
let chastnoe = firstNumber / secondNumber //частное 

let firstElement = document.getElementById("first")
firstElement.innerText = firstNumber
let secondElement = document.getElementById("second")
secondElement.innerText = secondNumber

let summaElement = document.getElementById("summa")
summaElement.innerText = summa
let raznostElement = document.getElementById("raznost")
raznostElement.innerText = raznost
let proizvedenieElement = document.getElementById("proizvedenie")
proizvedenieElement.innerText = proizvedenie
let chastnoeElement = document.getElementById("chastnoe")
chastnoeElement.innerText = chastnoe





















