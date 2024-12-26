let whiteButton = document.getElementById('white-button')
let blackButton = document.getElementById('black-button')
let greyButton = document.getElementById('grey-button')
let goldenButton = document.getElementById('golden-button')
let blueButton = document.getElementById('blue-button')
let minusTenButton = document.getElementById('minus10')
let minusOneButton = document.getElementById('minus1')
let plusOneButton = document.getElementById('plus1')
let plusTenButton = document.getElementById('plus10')
let changeButton = document.getElementById('change')
let total = document.getElementById('total')
let span1 = document.getElementById('even')
let span2 = document.getElementById('three')
let span3 = document.getElementById('five')
let span4 = document.getElementById('seven')
let count = 0
let his1 = document.getElementById('history-even')
let his2 = document.getElementById('history-three')
let his3 = document.getElementById('history-five')
let his4 = document.getElementById('history-seven')
let history = document.getElementById('history')
function check(){
    if (count % 2 == 0){
        span1.innerText = 'ДА'
    }
    else{
        span1.innerText = 'НЕТ'
    }
}
function checkThree(){
    if (count % 3 == 0){
        span2.innerText = 'ДА'
    }
    else{
        span2.innerText = 'НЕТ'
    }
}
function checkFive(){
    if (count % 5 == 0){
        span3.innerText = 'ДА'
    }
    else{
        span3.innerText = 'НЕТ'
    }
}
function checkSeven(){
    if (count % 7 == 0){
        span4.innerText = 'ДА'
    }
    else{
        span4.innerText = 'НЕТ'
    }
}
function changeNumber(){
    count = + prompt("Укажите число")
    total.innerText = count
    if (count % 2 == 0){
        his1.innerText = count
    }
    if (count % 5 == 0){
        his1.innerText = count
    }
    if (count % 7 == 0){
        his4.innerText = count
    }
    if (count % 3 == 0){
        his2.innerText = count
    }
    if (count % 2 != 0 && count % 5 !=0 && count % 7 !=0){
        history.innerText = history.innerText + '' + count
    }

    check()
    checkThree()
    checkSeven()
    checkFive()
}
changeButton.addEventListener('click', changeNumber)
function minus10(){
    count = count - 10
    total.innerText = count
    if (count % 2 == 0){
        his1.innerText = his4.innerText + '' + count
    }
    if (count % 5 == 0){
        his3.innerText = his3.innerText + '' + count
    }
    if (count % 7 == 0){
        his4.innerText = his4.innerText + '' + count
    }
    if (count % 3 == 0){
        his2.innerText = his2.innerText + '' + count
    }
    if (count % 2 != 0 && count % 5 !=0 && count % 7 !=0){
        history.innerText = history.innerText + '' + count
    }
    check()
    checkThree()
    checkSeven()
    checkFive()
}
minusTenButton.addEventListener('click', minus10)

function minus1(){
    count = count - 1
    total.innerText = count
    if (count % 2 == 0){
        his1.innerText = his1.innerText + '' + count
    }
    if (count % 5 == 0){
        his3.innerText = his3.innerText + '' + count
    }
    if (count % 7 == 0){
        his4.innerText = his4.innerText + '' + count
    }
    if (count % 3 == 0){
        his2.innerText = his2.innerText + '' + count
    }
    if (count % 2 != 0 && count % 5 !=0 && count % 7 !=0){
        history.innerText = history.innerText + '' + count
    }
    check()
    checkThree()
    checkSeven()
    checkFive()
}
minusOneButton.addEventListener('click', minus1)

function plus10(){
    count = count + 10
    total.innerText = count
    if (count % 2 == 0){
        his1.innerText = his1.innerText + '' + count
    }
    if (count % 5 == 0){
        his3.innerText = his3.innerText + '' + count
    }
    if (count % 7 == 0){
        his4.innerText = his4.innerText + '' + count
    }
    if (count % 3 == 0){
        his2.innerText = his2.innerText + '' + count
    }
    if (count % 2 != 0 && count % 5 !=0 && count % 7 !=0){
        history.innerText = history.innerText + '' + count
    }
    check()
    checkThree()
    checkSeven()
    checkFive()
}
plusTenButton.addEventListener('click', plus10)

function plus1(){
    count = count + 1
    total.innerText = his1.innerText + '' + count
    if (count % 2 == 0){
        his1.innerText = his1.innerText + '' + count
    }
    if (count % 5 == 0){
        his3.innerText = his3.innerText + '' + count
    }
    if (count % 7 == 0){
        his4.innerText = his4.innerText + '' + count
    }
    if (count % 3 == 0){
        his2.innerText = his2.innerText + '' + count
    }
    if (count % 2 != 0 && count % 5 !=0 && count % 7 !=0){
        history.innerText = history.innerText + '' + count
    }
    check()
    checkThree()
    checkSeven()
    checkFive()
}
plusOneButton.addEventListener('click', plus1)



function colorBlack(){
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
}
blackButton.addEventListener('click', colorBlack)

function colorWhite(){
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
}
whiteButton.addEventListener('click', colorWhite)

function colorGrey(){
    document.body.style.backgroundColor = 'grey'
    document.body.style.color = 'black'
}
greyButton.addEventListener('click', colorGrey)

function colorGolden(){
    document.body.style.backgroundColor = 'goldenrod'
    document.body.style.color = 'black'
}
goldenButton.addEventListener('click', colorGolden)

function colorBlue(){
    document.body.style.backgroundColor = 'darkblue'
    document.body.style.color = 'greenyellow'
}
blueButton.addEventListener('click', colorBlue)

