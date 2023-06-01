let keys = document.querySelectorAll('.letter')
const output = document.getElementById('content')
let deleteBtn = document.getElementById('deleteBtn')
let capsBtn = document.querySelector('.caps')
const enterBtn = document.getElementById('enter')
const spaceBtn = document.getElementById('space')

let toolBar = document.getElementById('toolbar')
let toolBarClose = document.querySelector('.closeTB')
let note = ''

const dataSavedLocalStorage = localStorage.getItem('nota')
if (dataSavedLocalStorage) {
    output.innerHTML = dataSavedLocalStorage
    note = dataSavedLocalStorage
}

keys.forEach((key) => {
    key.addEventListener('click', (e) => {
        const character = e.target.textContent
        console.log(character)
        output.innerHTML += character
        note += character
        console.log(note)
        saveNoteToLocalStorage()
    })
})

deleteBtn.addEventListener('click', () => {
    console.log('delete')
    output.textContent = output.textContent.slice(0, -1)
    note = note.slice(0, note.length - 1)
    console.log(note)
    saveNoteToLocalStorage()
})

capsBtn.addEventListener('click', () => {
    console.log('caps')
    output.classList.toggle('uppercase')
})

enterBtn.addEventListener('click', () => {
    console.log('enter')
    output.innerHTML += `<br>`
    note += '<br>'
    console.log(note)
    saveNoteToLocalStorage()
})

spaceBtn.addEventListener('click', () => {
    console.log('space')
    output.innerHTML += ' '
    note += ' '
    console.log(note)
    saveNoteToLocalStorage()
})

let plusTools = document.getElementById('plusTools')
toolBarClose.addEventListener('click', () => {
    toolBar.style.visibility = 'hidden'
})

window.addEventListener('keydown', (event) => {
    if (event.key == 'Spacebar' || event.key == ' ') {
        console.log('space')
        output.innerHTML += ' '
        note += ' '
        console.log(note)
        saveNoteToLocalStorage()
    } else if (event.key == 'Enter') {
        console.log('enter')
        output.innerHTML += `<br>`
        note += '\n'
        console.log(note)
        saveNoteToLocalStorage()
    } else if (event.key == 'CapsLock') {
        console.log('caps')
        output.classList.toggle('uppercase')
    } else if (event.key == 'Backspace') {
        console.log('delete')
        output.textContent = output.textContent.slice(0, -1)
        note = note.slice(0, note.length - 1)
        console.log(note)
        saveNoteToLocalStorage()
    } else if (
        event.key == 'Shift' ||
        event.key == 'Tab' ||
        event.key == 'Control' ||
        event.key == 'AltGraph' ||
        event.key == 'ContextMenu'
    ) {
        console.log(':)')
    } else {
        console.log(event.key)
        output.innerHTML += event.key
        note += event.key
        console.log(note)
        saveNoteToLocalStorage()
    }
})

function saveNoteToLocalStorage() {
    localStorage.setItem('nota', note)
}
