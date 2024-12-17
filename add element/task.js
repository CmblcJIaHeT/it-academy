let span1 = document.getElementById('title')
let span2 = document.getElementById('description')
let span3 = document.getElementById('button')
let span4 = document.getElementById('list')
function addTask(){
    //Создание нового элемента с помоью createElement
    let task = document.createElement('div')
    let taskTitle = document.createElement('div')
    let  taskDescription = document.createElement('div')
    let deleteButton = document.createElement('button')
    function deleteTask(){
        task.remove()
    }

    deleteButton.addEventListener('click', deleteTask)
    taskDescription.innerHTML = `<b>Название:</b> ${title.value}`
    taskTitle.innerHTML = `<b>Описание:</b> ${description.value}`
    deleteButton.innerHTML= 'удалить'

    task.classList.add('task')
    taskTitle.classList.add('taskTitle')
    taskDescription.classList.add('taskDescription')

    //добавление элемента с в конец элемента
    span4.append(task)
    task.append(taskTitle, taskDescription,deleteButton)


    title.value = ''
    description.value = ''




}

button.addEventListener('click', addTask)