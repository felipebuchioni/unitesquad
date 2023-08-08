import { matchType } from "./matchType.js"

const pointsBtn = document.querySelectorAll('.btnType')

pointsBtn.forEach((btn) => {
    btn.addEventListener('click', matchType)
})





