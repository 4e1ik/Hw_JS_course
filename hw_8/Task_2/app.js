'use strict'

const timer = document.getElementById('timer')

const getTodoss = document.createElement('button')
const p_getTodoss = document.createElement('p')
const text_getTodoss = document.createTextNode('getTodos')
p_getTodoss.append(text_getTodoss)
getTodoss.append(p_getTodoss)
timer.append(getTodoss)

const printTodoss = document.createElement('button')
const p_printTodoss = document.createElement('p')
const text_printTodoss = document.createTextNode('printTodos')
p_printTodoss.append(text_printTodoss)
printTodoss.append(p_printTodoss)
timer.append(printTodoss)

// const watch = document.createElement('p')
// let text_watch = document.createTextNode(`${i}`)
// watch.append(text_watch)
// timer.append(watch)

// async function getPosts() {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${input.value}`)
//     const reponseJSON = await response.json()
//     // return reponseJSON
//     const li = document.createElement('li')
//     li.classList.add('li')
//     btn.append(li)

//     for (let i = 0; i < reponseJSON.length; i++) {
//         const text = document.createElement('p')
//         const text_text = document.createTextNode(`${reponseJSON[i].title}`)
//         text.append(text_text)
//         li.append(text)
//     }
// }
// const result = getPosts().then(response => console.log(response))
// console.log(result);

var reponseJSON

async function getTodos(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    reponseJSON = await response.json()
    
}

async function printTodos(){
    
    const ul = document.createElement('ul')
    timer.append(ul)
    for (let i = 0; i < reponseJSON.length; i++) {
        const li = document.createElement('li')
        const text = document.createTextNode(`${reponseJSON[i].id} ${reponseJSON[i].title}`)
        li.append(text)
        ul.append(li)
    }
}

getTodoss.addEventListener('click', ()=>{
    getTodos()
})

printTodoss.addEventListener('click', ()=>{
    printTodos()
    
})