'use strict'

const section = document.getElementById('section')

const todo_section = document.createElement('div')
todo_section.classList.add('todo_section')
section.append(todo_section)

const Delete_All = document.createElement('button')
Delete_All.classList.add('Delete_All')
todo_section.append(Delete_All)
const del_all_title = document.createElement('p')
const del_all_title_text = document.createTextNode('Delete All')
del_all_title.append(del_all_title_text)
Delete_All.append(del_all_title)

const Delete_Last = document.createElement('button')
Delete_Last.classList.add('Delete_Last')
todo_section.append(Delete_Last)
const del_last_title = document.createElement('p')
const del_last_title_text = document.createTextNode('Delete Last')
del_last_title.append(del_last_title_text)
Delete_Last.append(del_last_title)


const Enter_todo = document.createElement('input')
Enter_todo.classList.add('Enter_todo')
Enter_todo.getAttribute('placeholder')
Enter_todo.setAttribute('placeholder','Enter todo...')
todo_section.append(Enter_todo)

const Add = document.createElement('button')
Add.classList.add('Add')
todo_section.append(Add)
const add_title = document.createElement('p')
const add_title_text = document.createTextNode('Add')
add_title.append(add_title_text)
Add.append(add_title_text)


///////////////////////////////////////////////////
let numb = 0

const search_section = document.createElement('div')
search_section.classList.add('search_section')
section.append(search_section)

const all_title = document.createElement('p')
let all_title_text = document.createTextNode(`All: ${numb}`)
all_title.append(all_title_text)
search_section.append(all_title)

const Completed_title = document.createElement('p')
const Completed_title_text = document.createTextNode('Completed: 1')
Completed_title.append(Completed_title_text)
search_section.append(Completed_title)

const Show_All = document.createElement('button')
Show_All.classList.add('Show_All')
search_section.append(Show_All)
const Show_All_title = document.createElement('p')
const Show_All_title_text = document.createTextNode('Show All')
Show_All_title.append(Show_All_title_text)
Show_All.append(Show_All_title)

const Show_Completed = document.createElement('button')
Show_Completed.classList.add('Show_Completed')
search_section.append(Show_Completed)
const Show_Completed_title = document.createElement('p')
const Show_Completed_title_text = document.createTextNode('Show Completed')
Show_Completed_title.append(Show_Completed_title_text)
Show_Completed.append(Show_Completed_title)

const search = document.createElement('input')
search.classList.add('Enter_todo')
search.getAttribute('placeholder')
search.setAttribute('placeholder','Search...')
search_section.append(search)


///////////////////////////////////////////////////


const todo_text_section = document.createElement('div')
todo_text_section.classList.add('todo_text_section')
section.append(todo_text_section)



// const first_text_section = document.createElement('div')
// first_text_section.classList.add('first_text_section')
// todo_text_section.append(first_text_section)

// const X = document.createElement('div')
// X.classList.add('X')
// first_text_section.append(X)

// const X_button = document.createElement('button')
// X_button.classList.add('X_button')
// X.append(X_button)
// const X_title = document.createElement('p')
// const X_title_text = document.createTextNode('X')
// X_title.append(X_title_text)
// X_button.append(X_title)

// const add_class = document.createElement('div')
// add_class.classList.add('add_class')
// first_text_section.append(add_class)

// const checkbox = document.createElement('input')
// checkbox.classList.add('checkbox')
// add_class.append(checkbox)
// checkbox.getAttribute('type')
// checkbox.setAttribute('type','checkbox')

// const input_text = document.createElement('input')
// input_text.classList.add('input_text')
// add_class.append(input_text)
// input_text.getAttribute('type')
// input_text.setAttribute('type','text')
// input_text.getAttribute('placeholder')
// input_text.setAttribute('placeholder','Todo text')

// const date = document.createElement('div')
// date.classList.add('date')
// first_text_section.append(date)
// const date_button = document.createElement('button')
// date_button.classList.add('date_button')
// date.append(date_button)
// const Date_title = document.createElement('p')
// const Date_title_text = document.createTextNode('Date')
// Date_title.append(Date_title_text)
// date_button.append(Date_title)

// X.style.marginRight = 10+'px'
// X.style.marginTop = 10+'px'
// date.style.marginRight = 10+'px'
// date.style.marginBottom = 5+'px'
// date_button.style.borderStyle = 'none'
// input_text.style.borderStyle = 'none'
// input_text.style.textAlign = 'center'
// Enter_todo.style.textAlign = 'center'
// add_class.style.display = 'flex'

// const clone_section = todo_text_section.firstChild.cloneNode(true)
// todo_text_section.append(clone_section)

// clone_section.style.marginBottom = 10+'px'


Add.addEventListener('click', e=>{

    const first_text_section = document.createElement('div')
    first_text_section.classList.add('first_text_section')
    todo_text_section.append(first_text_section)

    const X = document.createElement('div')
    X.classList.add('X')
    first_text_section.append(X)

    const X_button = document.createElement('button')
    X_button.classList.add('X_button')
    X.append(X_button)
    const X_title = document.createElement('p')
    const X_title_text = document.createTextNode('X')
    X_title.append(X_title_text)
    X_button.append(X_title)

    const add_class = document.createElement('div')
    add_class.classList.add('add_class')
    first_text_section.append(add_class)

    const checkbox = document.createElement('input')
    checkbox.classList.add('checkbox')
    add_class.append(checkbox)
    checkbox.getAttribute('type')
    checkbox.setAttribute('type','checkbox')

    const input_text = document.createElement('input')
    input_text.classList.add('input_text')
    add_class.append(input_text)
    input_text.getAttribute('type')
    input_text.setAttribute('type','text')
    input_text.getAttribute('placeholder')
    input_text.setAttribute('placeholder','Todo text')

    const date = document.createElement('div')
    date.classList.add('date')
    first_text_section.append(date)
    const date_button = document.createElement('button')
    date_button.classList.add('date_button')
    date.append(date_button)
    const Date_title = document.createElement('p')
    const Date_title_text = document.createTextNode('Date')
    Date_title.append(Date_title_text)
    date_button.append(Date_title)

    X.style.marginRight = 10+'px'
    X.style.marginTop = 10+'px'
    date.style.marginRight = 10+'px'
    date.style.marginBottom = 5+'px'
    date_button.style.borderStyle = 'none'
    input_text.style.borderStyle = 'none'
    input_text.style.textAlign = 'center'
    Enter_todo.style.textAlign = 'center'
    add_class.style.display = 'flex'

    onlineCount()

    X_button.addEventListener('click', ()=>{
        first_text_section.remove(this)
        onlineCount()

    })

    checkbox.addEventListener('click', ()=>{
        first_text_section.style.backgroundColor = 'red'
        input_text.style.textDecoration = 'line-through'
        date_button.style.textDecoration = 'line-through'
    })

    date.addEventListener('click', ()=>{
        let data = new Date ()

        input_text.setAttribute('placeholder',`${data}`)
    })
})



Delete_All.addEventListener('click', ()=>{
    const a = +document.body.children[0].children[2].childNodes.length

    for (let i = 0; i < a; i++) {
        
        // console.log('gg');
        todo_text_section.removeChild(todo_text_section.lastChild)
        
    }
    onlineCount()
})

Delete_Last.addEventListener('click', ()=>{
    todo_text_section.removeChild(todo_text_section.lastChild)
})

function onlineCount() {

    all_title_text.remove()
    numb = todo_text_section.children.length
    all_title_text = document.createTextNode(`All: ${numb}`)
    all_title.prepend(all_title_text)
    search_section.prepend(all_title)
}

// X_button.addEventListener('click', e=>{
//     first_text_section.remove(this)
// })

// checkbox.addEventListener('click', e=>{
//     first_text_section.style.backgroundColor = 'red'
//     input_text.style.textDecoration = 'line-through'
//     date_button.style.textDecoration = 'line-through'
// })

// date.addEventListener('click', e=>{
//     input_text.setAttribute('placeholder',`${data}`)
// })
// console.log(document);