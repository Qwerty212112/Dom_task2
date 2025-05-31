let tasks = [
];


const createTaskBlock = document.querySelector('.create-task-block');
const text = document.querySelector('.create-task-block__input');
console.log (createTaskBlock)


createTaskBlock.addEventListener('submit', (event) => {
    

    let object = {
        id: Date.now().toString(),
        completed: false,
        text: text.value,
    }

    tasks.push(object)
    event.preventDefault()

    for (let i = 0; i < tasks.length; i++) {
    const tasksId = tasks[i];
    const tasksText = tasks[i];
    const taskList = document.querySelector('.tasks-list')
    const div1 = document.createElement('div');
    div1.className = ('task-item')
    div1.dataset.taskId = tasksId.id
    const div2 = document.createElement('div')
    div1.append(div2)
    div2.className = ('task-item__main-container')
    const div3 = document.createElement ('div')
    div2.append(div3)
    div3.className = ('task-item__main-content')
    const form = document.createElement('form')
    form.className = ('checkbox-form')
    div3.append(form)
    const input1 = document.createElement('input')
    input1.className = ('checkbox-form__checkbox')
    input1.type = ('checkbox')
    form.append(input1)
    input1.id = tasksId.id
    const label = document.createElement('label')
    label.htmlFor = tasksId.id
    form.append(label)
    const span = document.createElement('span')
    span.className = 'task-item__text'
    span.textContent = tasksText.text
    div3.append(span)
    const button = document.createElement('button')
    button.className = 'task-item__delete-button default-button delete-button'
    button.textContent = 'Удалить'
    div2.append(button)
    taskList.append(div1)
    tasks = [];

    }
    
})
