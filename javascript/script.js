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

    document.getElementById('result').textContent = result
    document.getElementById('score').textContent = `Jugador: ${playerScore} | Computadora: ${computerScore}`

    if (playerScore ===3 || computerScore === 3){
        endGame()
    }
}

function endGame() {
    const finalResult = playerScore === 3 ? "¡Felicidades, has ganado!" : "Lo siento, ha ganado el ordenador"
    document.getElementById('result').textContent = finalResult

    document.getElementById('btnPiedra').disabled = true
    document.getElementById('btnPapel').disabled = true
    document.getElementById('btnTijera').disabled = true

    // Solo mostramos el div de reinicio, no llamamos restart()
    document.getElementById('restart').style.visibility = 'visible'
}

function restart(respuesta) {
    if (respuesta === "si") {
        playerScore = 0
        computerScore = 0

        document.getElementById('btnPiedra').disabled = false
        document.getElementById('btnPapel').disabled = false
        document.getElementById('btnTijera').disabled = false

        document.getElementById('result').textContent = ""
        document.getElementById('score').textContent = `Jugador: ${playerScore} | Computadora: ${computerScore}`

        document.getElementById('restart').style.visibility = 'hidden'
    } else {
        document.getElementById('result').textContent = "¡Gracias por jugar!"
        document.getElementById('restart').style.visibility = 'hidden'
    }
}