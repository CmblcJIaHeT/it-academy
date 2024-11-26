let span = document.getElementById("button")
let paragraph = document.getElementById("par")
let inp = document.getElementById("inp")

function changeParagraphText() {
    paragraph.innerText = inp.value
}

span.addEventListener('click', changeParagraphText)
