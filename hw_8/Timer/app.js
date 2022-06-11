'use strict'

const timer = document.getElementById('timer')

const start = document.createElement('button')
const p_start = document.createElement('p')
const text_start = document.createTextNode('Start')
p_start.append(text_start)
start.append(p_start)
timer.append(start)

const stopp = document.createElement('button')
const p_stopp = document.createElement('p')
const text_stopp = document.createTextNode('Stop')
p_stopp.append(text_stopp)
stopp.append(p_stopp)
timer.append(stopp)

let i = 0

const watch = document.createElement('p')
let text_watch = document.createTextNode(`${i}`)
watch.append(text_watch)
timer.append(watch)

function update(){
    text_watch.remove()
    text_watch = document.createTextNode(`${i}`)
    watch.append(text_watch)
    timer.append(watch)
    i++
}

var inter

start.addEventListener('click', ()=>{
    inter = setInterval(update, 1000)
})

stopp.addEventListener('click', ()=>{
    clearInterval(inter)
})