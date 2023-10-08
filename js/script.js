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
        const roundOutcome = 'TIE';
        return roundOutcome;   
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS' 
    || playerSelection == 'SCISSORS' && computerSelection == 'PAPER' 
    || playerSelection == 'PAPER' && computerSelection == 'ROCK')
    {
        const roundOutcome = `You Win! ${playerSelection} beats ${computerSelection}`;
        return roundOutcome;
    }
    else
    {
        const roundOutcome = `You Lose! ${computerSelection} beats ${playerSelection}`;
        return roundOutcome;
    }
}


const computerSelection = getComputerChoice();
const playerSelection = 'ROCK';


console.log(playRound(playerSelection, computerSelection));
