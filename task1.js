let tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];

let allInputValue = ['Посмотреть новый урок по JavaScript', 'Выполнить тест после урока','Выполнить ДЗ после урока'];


const createTaskForm = document.querySelector('.create-task-block');
const text = document.querySelector('.create-task-block__input');
const body = document.querySelector('body')
const taskList = document.querySelector('.tasks-list')




const divForm1 = document.createElement('div')
divForm1.className = ('modal-overlay modal-overlay_hidden')
const divForm2 = document.createElement('div')
divForm2.classList.add('delete-modal')
divForm1.append(divForm2)
const h3Form = document.createElement('h3')
h3Form.textContent = ('Вы действительно хотите удалить эту задачу?') 
divForm2.append(h3Form)
const divForm3 = document.createElement('div')
divForm3.classList.add('delete-modal__buttons')
divForm2.append(divForm3)
const buttonForm = document.createElement('button')
buttonForm.className = ('delete-modal__button delete-modal__cancel-button')
buttonForm.textContent = 'Отмена'
divForm3.append(buttonForm)
const buttonForm2 = document.createElement('button')
buttonForm2.className = ('delete-modal__button delete-modal__cancel-button')
buttonForm2.textContent = 'Удалить'
divForm3.append(buttonForm2)
body.append(divForm1)




createTaskForm.addEventListener('submit', (event) => {
    


    const { target } = event
    const taskNameInput = target.taskName
    const inputValue = taskNameInput.value  
    const createTaskBlock = document.querySelector('.create-task-block')
 

    let object = {
        id: Date.now().toString(),
        completed: false,
        text: text.value,
    }

    tasks.push(object)
    event.preventDefault()
    
    const newInput = object.text;
    let counter = 0;

    allInputValue.forEach((element) => {
       if (element === newInput) {
        counter++
       }
        }
     )
     allInputValue.push(object.text)
    
    for (let i = 0; i < tasks.length; i++) {
        
    if (inputValue === '') {
        const errorMessages = document.querySelectorAll('.create-task-block .error-message-block');
        errorMessages.forEach(message => message.remove());
        const span = document.createElement('span')
        span.className = 'error-message-block'
        span.textContent = 'Название задачи не должно быть пустым'
        tasks = [];
        return createTaskBlock.append(span)

    } else if (counter > 0) {
        const errorMessages = document.querySelectorAll('.create-task-block .error-message-block');
        errorMessages.forEach(message => message.remove());
        const span = document.createElement('span')
        span.className = 'error-message-block'
        span.textContent = 'Задача с таким названием уже существует.'
        tasks = [];
        return createTaskBlock.append(span)  

    }   

    const errorMessages = document.querySelectorAll('.create-task-block .error-message-block');
    errorMessages.forEach(message => message.remove());
    const tasksId = tasks[i];
    const tasksText = tasks[i];
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
    }
    counter = 0;
    tasks = [];
})

taskList.addEventListener('click', (event) => {
    const { target } = event;
    const modalOverlayHidden = document.querySelector('.modal-overlay')
    const currentTask = event.target.closest('.task-item');
    const taskId = currentTask.dataset.taskId;
    const span = currentTask.querySelector('.task-item__text')
    const taskText = span.textContent

    if (target.className === 'task-item__delete-button default-button delete-button') {

        modalOverlayHidden.classList.remove('modal-overlay_hidden')
        const deleteModalButtons = document.querySelector('.delete-modal__buttons')

        deleteModalButtons.addEventListener('click', (event) => {
        const { target } = event;
        if (target.textContent === 'Отмена' || target.textContent === 'ОтменаУдалить') { 
             modalOverlayHidden.classList.add('modal-overlay_hidden')
         } else {
            const allTaskItem = document.querySelectorAll('.task-item')
            const bb = allTaskItem.forEach((element) => {                
                if (element.dataset.taskId === taskId) {                        
                    const newArray = allInputValue.filter((item) => item !== taskText)
                    allInputValue = newArray                    
                    element.remove()
                    modalOverlayHidden.classList.add('modal-overlay_hidden') 

                } 
            })
         }  
        })



    }
})

let count = 0;
body.addEventListener('keydown', (event) => {
    const { key } = event
    const allButton = document.querySelectorAll('button')
    if (key === 'Tab' && count % 2 === 0) {
        allButton.forEach((item) => {item.style.border = '1px solid #ffffff'})
        body.style.background = '#24292E'
        taskList.style.color = '#ffffff'
        count++
    } else if (key === 'Tab'&& count % 2 === 1) {
        allButton.forEach((item) => {item.style.border = 'none'})
        body.style.background = 'initial'
        taskList.style.color = 'initial'
        count++
    }
})

