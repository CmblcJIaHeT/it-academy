let spa1 = document.getElementById("inp1")
let spa2 = document.getElementById("inp2")
let spa3 = document.getElementById("inp3")
let spa4 = document.getElementById("inp4")
let spa5 = document.getElementById("inp5")
let but1 = document.getElementById("but1")
let but2 = document.getElementById("but2")

// function changeParagraphText1(){
//     spa1.innerText =
// }
// but1.addEventListener("click",changeParagraphText1)
//
// function changeParagraphText2(){
//     spa2.innerText =
// }
// but1.addEventListener("click",changeParagraphText2)
//
// function changeParagraphText3(){
//     spa3.innerText =
// }
// but1.addEventListener("click",changeParagraphText3)
//
// function changeParagraphText4(){
//     spa4.innerText =
// }
// but1.addEventListener("click",changeParagraphText4)
//
// function changeParagraphText5(){
//     spa5.innerText =
//
// }
// but1.addEventListener("click",changeParagraphText5)


let button = document.getElementById('but1');
let elements = document.getElementById('elements');
let elementNumber = 0;
function appendElement() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('element');
    elementNumber = elementNumber + 1;
    newDiv.innerHTML = `<span>Новый элемент №${ elementNumber }</span>`;
    elements.append(newDiv);
}

button.addEventListener('click', appendElement);


