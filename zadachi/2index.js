let span = document.getElementById("button")
let paragraph = document.getElementById("paragraph")

function changeParagraphText() {
    if (paragraph.innerText == 'Текст внутри div') {
        paragraph.innerText = 'Новый текст внутри div'
    }
    else {
        paragraph.innerText = 'Текст внутри div'
    }
}

span.addEventListener('click', changeParagraphText)


// function changeText() {
//     if (span.innerText == 'Текст') {
//         span.innerText = 'Новый текст'
//     }
//     else {
//         span.innerText = 'Текст'
//     }
// }
// span.addEventListener("click", changeText)
// let firstText = ("Введите первое число")
//
//
//
// let firstElement = document.getElementById("first")
// firstElement.innerText = firstNumber
// let secondElement = document.getElementById("second")
// secondElement.innerText = secondNumber

// let summaElement = document.getElementById("summa")
// summaElement.innerText = summa
// let raznostElement = document.getElementById("raznost")
// raznostElement.innerText = raznost
// let proizvedenieElement = document.getElementById("proizvedenie")
// proizvedenieElement.innerText = proizvedenie
// let chastnoeElement = document.getElementById("chastnoe")
// chastnoeElement.innerText = chastnoe