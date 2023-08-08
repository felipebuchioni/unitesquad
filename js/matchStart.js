const greenTeam = document.getElementById('greenTeam')
const blueTeam = document.getElementById('blueTeam')
const resetBtn = document.getElementById('resetBtn')

const matchText = document.getElementById('matchText')

let number = ''

export function matchStart(type) {

  if(type == '15') {
    number = 15
  }

  if(type == '21') {
    console.log('time 21')
    number = 21
  }

  if(type == '25') {
    console.log('time 25')
    number = 25
  }

  

  greenTeam.addEventListener('click', addPoint)

  blueTeam.addEventListener('click', addPoint)
}

export function addPoint(team) {

  console.log(team.target.value)

  team.target.value = Number(team.target.value) + 1
  
  if(team.target.value == number) {
    matchText.style.display = 'block'
    matchText.innerHTML = `A equipe <strong style="font-weight: 700;">${team.target.dataset.color}</strong> ganhou!`
    greenTeam.removeEventListener('click', addPoint)
    blueTeam.removeEventListener('click', addPoint)
    if (team.target.dataset.color == 'VERDE') {
      matchText.style.color = '#4DB260'
    } else {
      matchText.style.color = 'var(--fourth-color)'
    }
    
  }
}

resetBtn.addEventListener('click', () => {
  greenTeam.value = 0
  blueTeam.value = 0

  matchText.innerHTML = `A partida acaba em <strong style="font-weight: 700;" id="matchTypeId">${number}</strong> pontos!`
  matchText.style.color = 'var(--fourth-color)'

  greenTeam.addEventListener('click', addPoint)
  blueTeam.addEventListener('click', addPoint)
})




