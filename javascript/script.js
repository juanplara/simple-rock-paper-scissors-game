let playerScore = 0
let computerScore = 0

function playGame(userChoice) {
    const choices = ["piedra", "papel", "tijera"]
    const computerChoice = choices[Math.floor(Math.random() * 3)]

    let result = ""

    if (userChoice === computerChoice) {
        result = `Empate. Ambos jugadores eligieron ${userChoice}`
    } else if (
        (userChoice === "piedra" && computerChoice === "tijera") ||
        (userChoice === "papel" && computerChoice === "piedra") ||
        (userChoice === "tijera" && computerChoice === "papel")
    ) {
        result = `Ganaste. ${userChoice} gana a ${computerChoice}`
        playerScore++
    } else {
        result = `Perdiste. ${computerChoice} gana a ${userChoice}`
        computerScore++
    }
}

function endGame() {

}