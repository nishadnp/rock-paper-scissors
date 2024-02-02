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
    
    // Fetch Computer's Move.
    const computerSelection = getComputerChoice();

    // If round is not favourable to either of players.
    if (playerSelection === computerSelection) 
    {
        choice.textContent = `Player Move: ${playerSelection}, Computer Move: ${computerSelection}`;
        score.textContent = `Player: ${playerScore} ----- Computer: ${computerScore}`;
        roundOutcome.textContent = 'Round tie!';  
    }
    // If round is in Player's favour.
    else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS' 
    || playerSelection == 'SCISSORS' && computerSelection == 'PAPER' 
    || playerSelection == 'PAPER' && computerSelection == 'ROCK')
    {
        playerScore++;
        choice.textContent = `Player Move: ${playerSelection}, Computer Move: ${computerSelection}`;
        score.textContent = `Player: ${playerScore} ----- Computer: ${computerScore}`;
        roundOutcome.textContent = `${playerSelection} beats ${computerSelection}`;
    }
    // If round is in Computer's favour.
    else
    {
        computerScore++;
        choice.textContent = `Player Move: ${playerSelection}, Computer Move: ${computerSelection}`;
        score.textContent = `Player: ${playerScore} ----- Computer: ${computerScore}`;
        roundOutcome.textContent = `${computerSelection} beats ${playerSelection}`;
    }

    // Deem the first player to scores 5 as winner.
    if (playerScore === 5 || computerScore === 5)
    {
        displayWinner();
    }
}

// Display the first to score 5.
function displayWinner() {
    container.appendChild(winner);
    playerScore === 5 ?  winner.textContent = "YOU WON THE GAME!" : winner.textContent = "COMPUTER WON THE GAME!";
    resetFlag = true;
}

// Reset scores and remove displayed results
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    choice.textContent = "";
    score.textContent = "";
    roundOutcome.textContent = "";
    winner.textContent = "";
}



let playerScore = 0;    
let computerScore = 0; 
let resetFlag = false;

const buttons = document.querySelectorAll('button');
const container = document.getElementById('container');

const score = document.createElement('p');
container.appendChild(score);
const choice = document.createElement('p');
container.appendChild(choice);
const roundOutcome = document.createElement('p');
container.appendChild(roundOutcome);
const winner = document.createElement('p');



buttons.forEach((button) => { 
    button.addEventListener('click', () => {

        // Checks if the game needs to be resetted
        if (resetFlag == true) 
        {
            resetFlag = false;
            resetGame();
        }

        // Pass Player's choice of move fetched from the button pressed to playRound().
        playRound(button.value.toUpperCase());
    });
});
    

