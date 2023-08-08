import { sortTeam } from "./sortTeam.js"
import { renderTeam } from "./renderTeam.js"
import { teams } from "./sortTeam.js"

const namesForm = document.getElementById('namesForm')
const sortBtn = document.getElementById("sortBtn")
const nameList = document.getElementById('nameList')

export let type = ''
export let players = []

export function teamType() {
    players = []
    nameList.innerHTML = ''
    nameList.style.display = 'none'
    namesForm.style.display = 'flex'
    sortBtn.style.display = 'none' 

    switch(this.id) {
        case 'btn-2':
            type = 12
            break

        case 'btn-3':
            type = 18
            break

        case 'btn-4':
            type = 24
            break
    }

}

sortBtn.addEventListener('click', function() {
    
    sortTeam(type)
    nameList.innerHTML = ''

    renderTeam(teams)

})