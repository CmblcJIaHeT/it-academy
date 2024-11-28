let span1 = document.getElementById("d1")
let span3 = document.getElementById("d3")
let span2 = document.getElementById("d2")
let spa1 = document.getElementById("span1")
let spa3 = document.getElementById("span3")
let spa2 = document.getElementById("span2")
let clearBtn = document.getElementById("clear")
let but1 = document.getElementById("but1")
let but3 = document.getElementById("but3")
let but2 = document.getElementById("but2")

function changeParagraphText() {
    spa1.innerText = span1.value
}
but1.addEventListener('click', changeParagraphText)

function changeParagraphText1() {
    spa3.innerText = span3.value
}
but3.addEventListener('click', changeParagraphText1)

function changeParagraphText2() {
    spa2.innerText = span2.value
}
but2.addEventListener('click', changeParagraphText2)

function clearAll() {
    span1.value = ''
}
clearBtn.addEventListener('click', clearAll)

function clearAll2() {
    span2.value = ''
}
clearBtn.addEventListener('click', clearAll2)

function clearAll3() {
    span3.value = ''
}
clearBtn.addEventListener('click', clearAll3)

function clearAll45() {
    spa1.innerText = ''
}
clearBtn.addEventListener('click', clearAll45)

function clearAll25() {
    spa2.innerText = ''
}
clearBtn.addEventListener('click', clearAll25)

function clearAll33() {
    spa3.innerText = ''
}
clearBtn.addEventListener('click', clearAll33)

