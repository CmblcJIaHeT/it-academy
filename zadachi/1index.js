let span = document.getElementById("button")


function changeText() {
    if (span.innerText == 'Текст') {
        span.innerText = 'Новый текст'
    }
    else {
        span.innerText = 'Текст'
    }
}

span.addEventListener("click", changeText)

