let span1 = document.getElementById("d1")
let span3 = document.getElementById("d3")
let span2 = document.getElementById("d2")
let spa1 = document.getElementById("span1")
let spa3 = document.getElementById("span3")
let spa2 = document.getElementById("span2")

function changeParagraphText() {
    spa1.innerText = span1.value
}
span1.addEventListener('click', changeParagraphText)

function changeParagraphText1() {
    spa3.innerText = span3.value
}
span3.addEventListener('click', changeParagraphText1)

function changeParagraphText2() {
    spa2.innerText = span2.value
}
span2.addEventListener('click', changeParagraphText2)