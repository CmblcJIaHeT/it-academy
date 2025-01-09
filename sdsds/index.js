let spa1 = document.getElementById("inp1")
let spa2 = document.getElementById("inp2")
let spa3 = document.getElementById("inp3")
let spa4 = document.getElementById("inp4")
let spa5 = document.getElementById("inp5")
let but1 = document.getElementById("but1")
let but2 = document.getElementById("but2")
let uvt = document.getElementById('uvt')

let button = document.getElementById('but1');
let elements = document.getElementById('elements');
function appendElement() {
    const newDiv = document.createElement('div');
    newDiv.innerHTML += `<div>${spa1.value}</div>`;
    newDiv.innerHTML += `<div>Цена:${spa2.value}</div>`;
    newDiv.innerHTML += `<div>Количество:${spa3.value}</div>`;
    newDiv.innerHTML += `<div>Артикул:${spa4.value}</div>`;
    newDiv.innerHTML += `<div>Описание:${spa5.value}</div>`;

    let deleteDiv = document.createElement('button')
    deleteDiv.innerText = 'удалить'
    deleteDiv.style.backgroundColor = '#830101'
    deleteDiv.style.color = '#fddbdb'
    deleteDiv.style.borderRadius = '5px'
    newDiv.append(deleteDiv)
    function deleteBut() {
        if (confirm("Вы точно хотите удалить товар?")) {
            newDiv.remove()
        } else {
            alert('Вы отменили удаление товара')
        }

    }
    deleteDiv.addEventListener('click', deleteBut)
    elements.append(newDiv)
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

function deleteVse(){

        if (confirm("Вы точно хотите удалить все товары?")) {
            elements.innerHTML = ""
        } else {
            alert('Вы отменили удаление всех товаров')
        }
}
uvt.addEventListener('click',deleteVse)







