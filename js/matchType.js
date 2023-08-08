import { matchStart } from "./matchStart.js"
import { addPoint } from "./matchStart.js"

const matchText = document.getElementById('matchText')
const greenTeam = document.getElementById('greenTeam')
const blueTeam = document.getElementById('blueTeam')
let type = ''

export function matchType () {

  greenTeam.removeEventListener('click', addPoint)
  blueTeam.removeEventListener('click', addPoint)

  switch(this.id) {
      case 'btn-15':
          type = '15'
          break

      case 'btn-21':
          type = '21'
          break

      case 'btn-25':
          type = '25'
          break
  }

  matchText.style.display = 'block'
  matchText.innerHTML = `A partida acaba em <strong style="font-weight: 700;" id="matchTypeId">${type}</strong> pontos!`
  matchText.style.color = 'var(--fourth-color)'

  greenTeam.value = 0
  blueTeam.value = 0

  matchStart(type)

}