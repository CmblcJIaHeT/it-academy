let name = prompt("Введите ваше имя")
let lastname = prompt("Введите вашу фамилию")
let middlename = prompt("Введите ваше отчество")
let age = +prompt("Введите свой возраст")
let school = prompt("Введите название вашей школы")
let cla = prompt("Введите название своего класса")
let sport = prompt("Введите свой любимый спорт")
let sub = prompt("Введите свой любимый предмет")
let color = prompt("Введите свой любимый цвет")

let nameElement = document.getElementById("name")
nameElement.innerText = name

let lastnameElement = document.getElementById("lastname")
lastnameElement.innerText = lastname

let middlenameElement = document.getElementById("middlename")
middlenameElement.innerText = middlename

let ageElement = document.getElementById("age")
ageElement.innerText = age

let schoolElement = document.getElementById("school")
schoolElement.innerText = school

let classElement = document.getElementById("class")
classElement.innerText = cla

let sportElement = document.getElementById("sport")
sportElement.innerText = sport

let subjectElement = document.getElementById("subject")
subjectElement.innerText = sub

let colorElement = document.getElementById("color")
colorElement.innerText = color
