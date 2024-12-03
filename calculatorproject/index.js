input = documet.getElementById("input")

//Функция добавления элемента в input
//value-аргемент функции
function appendValue(value){
    input.value = input.value + value;
}

//Функция для рассчета
function compute(){
    //eval -  функция  для выполнения JavaScript-кода
    input.value = eval(input.value);
}