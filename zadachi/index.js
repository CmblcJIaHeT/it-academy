
let span = document.getElementById("button")
let spans = document.getElementById("button2")
let spanz = document.getElementById("button3")

span.addEventListener('click', colorRed)
function colorRed() {
    document.body.style.backgroundColor = 'Red'
}
spanz.addEventListener('click', colorRed)

spans.addEventListener('click', colorGreen)
function colorGreen() {
    document.body.style.backgroundColor = 'green'
}

spanz.addEventListener('click', colorBlue)
function colorBlue() {
    document.body.style.backgroundColor = 'blue'
}

spanz.addEventListener('click', colorBlue)