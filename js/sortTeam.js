import { players } from "./teamType.js"

export const names = document.getElementById('nameList')
export let teams = []

export function sortTeam(type) {
    teams = []
    let numTeams = ''

    if(type === 12) {
        numTeams = 2

    } if (type === 18) {
        numTeams = 3

    } if (type === 24) {
        numTeams = 4

    }

    let randomNames = shuffleArray(players)

    for (let i = 0; i < numTeams; i++) {
        teams.push([])
    }

    let teamIndex = 0
    for (let i = 0; i < randomNames.length; i++) {
        if(teams[teamIndex].length < 6) {
            teams[teamIndex].push(randomNames[i])
        } else {
            teamIndex = (teamIndex + 1) % numTeams
            teams[teamIndex].push(randomNames[i])
        }

        teamIndex = (teamIndex + 1) % numTeams
    }

}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}