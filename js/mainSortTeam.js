import { teamType } from "./teamType.js"
import { type } from "./teamType.js"
import { players } from "./teamType.js"

const teamBtn = document.querySelectorAll('.btnTeam')
const namesForm = document.getElementById('namesForm')
const nameList = document.getElementById('nameList')
const sortBtn = document.getElementById("sortBtn")


teamBtn.forEach((btn) => {
    btn.addEventListener('click', teamType)
})


namesForm.addEventListener('submit', (event) => {
    event.preventDefault()

    console.log(nameList)

    const name = event.target.elements[0]

    if(name.value === '') {
        alert('Insira um nome!')
        return
    }

    nameList.style.display = 'flex'

    players.push(name.value)
    nameList.innerHTML += `<li class="nameList-player" data-player="${name.value}">
                            <p>${name.value.toUpperCase()}</p>
                            <i class="fa-solid fa-xmark" id="deleteBtn"></i>
                           </li>`

    name.value = ''

    const deleteBtn = document.querySelectorAll('#deleteBtn')

    deleteBtn.forEach((btn) => {
        btn.addEventListener('click', removeElement)
    })

    if(nameList.children.length === type) {
        sortBtn.style.display = 'flex'
        event.target.style.display = 'none'
    } 
})

function removeElement() {
    let removePlayer = this.parentNode.dataset.player
    let indexToRemove = players.indexOf(removePlayer)

    players.splice(indexToRemove, 1)
    this.parentNode.remove()
    

    if (nameList.children.length !== 0) {
        nameList.style.display = 'flex'
    } else {
        nameList.style.display = 'none'
    }

    if (nameList.children.length !== type) {
        sortBtn.style.display = 'none'
    }

    if(nameList.children.length < type) {
        sortBtn.style.display = 'none'
        namesForm.style.display = 'flex'
    } 
}

