let spa1 = document.getElementById("inp1")
let spa2 = document.getElementById("inp2")
let spa3 = document.getElementById("inp3")
let spa4 = document.getElementById("inp4")
let spa5 = document.getElementById("inp5")
let but1 = document.getElementById("but1")
let but2 = document.getElementById("but2")


let button = document.getElementById('but1');
let elements = document.getElementById('elements');
let deleteButton = document.createElement('deleteButton')
function appendElement() {
    const newDiv = document.createElement('div');
    newDiv.innerHTML += `<div>${spa1.value}</div>`;
    newDiv.innerHTML += `<div>Цена${spa2.value}</div>`;
    newDiv.innerHTML += `<div>Количество${spa3.value}</div>`;
    newDiv.innerHTML += `<div>Артикул${spa4.value}</div>`;
    newDiv.innerHTML += `<div>Описание${spa5.value}</div>`;
    elements.append(newDiv);

    let deleteDiv = document.createElement('button')
    newDiv.append(deleteDiv)
    deleteButton.innerHTML = 'Удалить'
    function deleteBut() {
        newDiv.remove()
    }

    deleteDiv.addEventListener('click', deleteBut)
    elements.append(newDiv, deleteDiv)
}

button.addEventListener('click', appendElement);
function buttonInput1(){
    spa1.value = ''
}
but2.addEventListener('click', buttonInput1)

function buttonInput2() {
    spa2.value = ''
}
but2.addEventListener('click', buttonInput2)

function buttonInput3() {
    spa3.value = ''
}
but2.addEventListener('click', buttonInput3)

function buttonInput4() {
    spa4.value = ''
}
but2.addEventListener('click', buttonInput4)

function buttonInput5() {
    spa5.value = ''
}
but2.addEventListener('click', buttonInput5)






