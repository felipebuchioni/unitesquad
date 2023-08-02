import { matchType } from "./matchType.js"

const pointsBtn = document.querySelectorAll('.btnn')

pointsBtn.forEach((btn) => {
    btn.addEventListener('click', matchType)
})



