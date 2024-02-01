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



function playRound(playerSelection) {
    
    const computerSelection = getComputerChoice();
    console.log(`Your move: ${playerSelection}`);
    console.log(`Computer move: ${computerSelection}`);

    if (playerSelection === computerSelection) 
    {
        const roundOutcome = 'Round tie!';
        console.log(`You: ${playerScore} \t Computer: ${computerScore}`);
        return roundOutcome;  
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS' 
    || playerSelection == 'SCISSORS' && computerSelection == 'PAPER' 
    || playerSelection == 'PAPER' && computerSelection == 'ROCK')
    {
        const roundOutcome = `${playerSelection} beats ${computerSelection}, you wins the round!`;
        playerScore++;
        console.log(`You: ${playerScore} \t Computer: ${computerScore}`);
        return roundOutcome;
    }
    else
    {
        const roundOutcome = `${computerSelection} beats ${playerSelection}, computer wins the round!`;
        computerScore++;
        console.log(`You: ${playerScore} \t Computer: ${computerScore}`);
        return roundOutcome;
    }
}



let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => { 
    button.addEventListener('click', () => {
        playRound(button.value.toUpperCase());
    });
});
    






