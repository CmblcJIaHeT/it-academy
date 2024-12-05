let input = document.getElementById("input")
let clearBtn = document.getElementById("clear")
let clearBt = document.getElementById("clear1")

//Функция добавления элемента в input
//value-аргемент функции
function appendValue(value){
    input.value = input.value + value;
}

//Функция для рассчета
function compute(){
    try {
        //eval -  функция  для выполнения JavaScript-кода
        input.value = eval(input.value);
    }
    catch(e) {
        input.value = 'Ошибка!'
    }
}

function clearAll() {
    input.value = ''
}
clearBtn.addEventListener('click',clearAll )

function backSpace() {
    input.value = input.value.slice(0, -1)
}

clearBt.addEventListener('click', backSpace)


function checkKey1(event) {
    let keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9','0'];
    if (keys.includes(event.key) == false) {
        event.preventDefault();
    }
}
input.addEventListener('keypress', checkKey1)
