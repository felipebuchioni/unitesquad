import { names } from "./sortTeam.js"

const sortBtn = document.getElementById("sortBtn")

export function renderTeam(teams) {
  let teamIndex = 0

  console.log(teams)

  teams.forEach((team) => {
    let members = ''
    

    for(let i = 0; i < team.length; i++) {
      members += `<p class="teamMember">${team[i]}</p>`
    }

    names.style.display = 'flex'
    names.innerHTML += `<li class="team">
                          <h1 class="teamNumber">EQUIPE ${teamIndex + 1}</h1>
                          ${members}
                        </li>`
    names.style.gap = '10px 120px'

    teamIndex += 1

    sortBtn.style.display = 'none'
  })
}