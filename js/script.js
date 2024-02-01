// Generate Computer's Choice.
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS';
    }
}


// Play a round.
function playRound(playerSelection) {
    
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) 
    {
        choice.textContent = `Player Move: ${playerSelection}, Computer Move: ${computerSelection}`;
        score.textContent = `Player: ${playerScore} ----- Computer: ${computerScore}`;
        roundOutcome.textContent = 'Round tie!';  
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS' 
    || playerSelection == 'SCISSORS' && computerSelection == 'PAPER' 
    || playerSelection == 'PAPER' && computerSelection == 'ROCK')
    {
        playerScore++;
        choice.textContent = `Player Move: ${playerSelection}, Computer Move: ${computerSelection}`;
        score.textContent = `Player: ${playerScore} ----- Computer: ${computerScore}`;
        roundOutcome.textContent = `${playerSelection} beats ${computerSelection}`;
    }
    else
    {
        computerScore++;
        choice.textContent = `Player Move: ${playerSelection}, Computer Move: ${computerSelection}`;
        score.textContent = `Player: ${playerScore} ----- Computer: ${computerScore}`;
        roundOutcome.textContent = `${computerSelection} beats ${playerSelection}`;
    }

    if (playerScore === 5 || computerScore === 5)
    {
        displayWinner();
    }
}

// Display the first to score 5.
function displayWinner() {
    const winner = document.createElement('p');
    container.appendChild(winner);
    playerScore === 5 ? winner.textContent = "YOU WON THE GAME!" : winner.textContent = "COMPUTER WON THE GAME!";
}





let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const container = document.getElementById('container');

const score = document.createElement('p');
container.appendChild(score);
const choice = document.createElement('p');
container.appendChild(choice);
const roundOutcome = document.createElement('p');
container.appendChild(roundOutcome);



buttons.forEach((button) => { 
    button.addEventListener('click', () => {
        // Pass Player's choice fetched from the button pressed.
        playRound(button.value.toUpperCase());
    });
});
    

