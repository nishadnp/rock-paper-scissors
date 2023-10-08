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



function playRound(playerSelection, computerSelection) {
    
    console.log(playerSelection);
    console.log(computerSelection)

    if (playerSelection === computerSelection) 
    {
        return;  
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS' 
    || playerSelection == 'SCISSORS' && computerSelection == 'PAPER' 
    || playerSelection == 'PAPER' && computerSelection == 'ROCK')
    {
        const roundOutcome = `${playerSelection} beats ${computerSelection}, you wins the round!`;
        playerScore++;
        return roundOutcome;
    }
    else
    {
        const roundOutcome = `${computerSelection} beats ${playerSelection}, computer wins the round!`;
        computerScore++;
        return roundOutcome;
    }
}


function game() {

    for (let i = 1; i <= 5; i++) 
    {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt('Your Move?').toUpperCase();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore < computerScore) 
    {
        console.log('You LOST, Computer WINS!');
        console.log(`You: ${playerScore} \t Computer: ${computerScore}`);
    }
    else if (playerScore > computerScore)
    {   
        console.log('You WINS!');
        console.log(`You: ${playerScore} \t Computer: ${computerScore}`);
    }
    else
    {
        console.log('It\'s TIE!');
        console.log(`You: ${playerScore} \t Computer: ${computerScore}`);
    }
}

let playerScore = 0;
let computerScore = 0;

game();





