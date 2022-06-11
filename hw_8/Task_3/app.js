'use strict'

const timer = document.getElementById('timer')

// const getTodoss = document.createElement('button')
// const p_getTodoss = document.createElement('p')
// const text_getTodoss = document.createTextNode('getTodos')
// p_getTodoss.append(text_getTodoss)
// getTodoss.append(p_getTodoss)
// timer.append(getTodoss)

// const printTodoss = document.createElement('button')
// const p_printTodoss = document.createElement('p')
// const text_printTodoss = document.createTextNode('printTodos')
// p_printTodoss.append(text_printTodoss)
// printTodoss.append(p_printTodoss)
// timer.append(printTodoss)

/////////////////////////////////////////////////////////////////////////////////

const url = 'https://jsonplaceholder.typicode.com/posts1'

let numbers = prompt('Введите номера постов в формате: 15, 23, 7, 3, ..., i, i+1')

let arrNumbers = numbers.split(', ')

console.log(arrNumbers);

// //////////////////////////////////////////////////////////////////////

async function posts() {

    try {
        const getPosts = await fetch(url)
        const responseJSON = await getPosts.json()
        const ul = document.createElement('ul')
        timer.append(ul)

        for (let i = 0; i < arrNumbers.length; i++) {
                    
            for (let j = 0; j < responseJSON.length; j++) {

                if (responseJSON[j].id === +arrNumbers[i]){
                    const li = document.createElement('li')
                    const text = document.createTextNode(`${responseJSON[arrNumbers[i]-1].id} ${responseJSON[arrNumbers[i]-1].title}`)
                    li.append(text)
                    ul.append(li)
                }
            }
        }

    } catch (error) {
        console.log(error);
    }

}

posts()