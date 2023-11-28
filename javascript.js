// get player choice of rps
function getPlayerChoice(){
    let playerSelection = prompt("Please choose 'Rock', 'Paper', 'Scissors'");
    return playerSelection.toLowerCase();
}

// get computer choice of rps
function getComputerChoice(){
    let rps = ["rock", "paper", "scissors"];
    let computerSelection = rps[Math.floor(Math.random() * rps.length)];
    return computerSelection;
}

// get single round winners
function roundWinners(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        console.log(`Its a tie, you both choose ${playerSelection}`);
    }
    else if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")){
        playerScore++; 
        console.log(playerScore);
        console.log(`You Win!, you choose ${playerSelection} and the computer choose ${computerSelection}`);
        
    }
    else{
        computerScore++;
        console.log(computerScore);
        console.log(`You Lose!, you choose ${playerSelection} and the computer choose ${computerSelection}`);
        
    }
}

function fiveRounds(){
    let playerSelection = "", computerSelection = "";
    let game = 5;
    while(game){
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        roundWinners(playerSelection, computerSelection);
        game--;
    }
    if(playerScore > computerScore){
        console.log(`Player Wins ${playerScore}:${computerScore}`);
    }
    else if(playerScore < computerScore){
        console.log(`Player Lose ${playerScore}:${computerScore}`);
    }
    else{
        console.log(`Match tie, Score ${playerScore}:${computerScore}`);
    }
}

//call main function
let playerScore = 0;
let computerScore = 0;
fiveRounds();


