function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    }
}

function playerRock(computerSelection) {
    switch (computerSelection) {
        case 'Paper':
            return 0;
        case 'Scissors':
            return 1;
    }
}

function playerPaper(computerSelection) {
    switch (computerSelection) {
        case 'Rock':
            return 1;
        case 'Scissors':
            return 0;
    }
}

function playerScissors(computerSelection) {
    switch (computerSelection) {
        case 'Rock':
            return 0;
        case 'Paper':
            return 1;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.at(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection === computerSelection) {
        tie++;
        return "Tied!";
    } else {
        switch (playerSelection) {
            case 'Rock':
                if (playerRock(computerSelection)) {
                    playerWin++;
                    return "You win " + playerSelection + " beat " + computerSelection;
                } else {
                    computerWin++;
                    return "You lose " + computerSelection + " beat " + playerSelection;
                }
            case 'Paper':
                if (playerPaper(computerSelection)) {
                    playerWin++;
                    return "You win " + playerSelection + " beat " + computerSelection;
                } else {
                    computerWin++;
                    return "You lose " + computerSelection + " beat " + playerSelection;
                }
            case 'Scissors':
                if (playerScissors(computerSelection)) {
                    playerWin++;
                    return "You win " + playerSelection + " beat " + computerSelection;
                } else {
                    computerWin++;
                    return "You lose " + computerSelection + " beat " + playerSelection;
                }
        }
    }
}

let playerWin = 0;
let computerWin = 0;
let tie = 0;

function playGame(playerChoice) {
    const computerSelection = getComputerChoice();
    winner.textContent = playRound(playerChoice, computerSelection) + ". Player: " + playerWin + ", computer: " + computerWin + ", tie: " + tie;
    if (playerWin === 5 || computerWin === 5) {
        announceResult();
        playerWin = 0;
        computerWin = 0;
        tie = 0;
    }
}

function announceResult() {
    if (playerWin > computerWin) {
        const para = document.createTextNode(" Player won.");
        winner.appendChild(para);
    } else if (playerWin === computerWin) {
        const para = document.createTextNode(" Draw!");
        winner.appendChild(para);
    } else {
        const para = document.createTextNode(" Computer won.");
        winner.appendChild(para);
    }
}

const choice = document.querySelector("#choice");
const winner = document.querySelector(".winner");

choice.addEventListener("click", (e) => {
    const target = e.target;
    switch (target.id) {
        case 'rock':
            playGame("Rock");
            break;
        case 'paper':
            playGame("Paper");
            break;
        case 'scissors':
            playGame("Scissors");
            break;
    }
})
