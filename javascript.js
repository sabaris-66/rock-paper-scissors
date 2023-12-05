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
        scoreCard.textContent = ` ${playerScore} : ${computerScore} \nIts a tie, you both choose ${playerSelection}`;
    }
    else if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")){
        playerScore++; 
        scoreCard.textContent = `${playerScore} : ${computerScore} \nYou Win!, you choose ${playerSelection} and the computer choose ${computerSelection}`;        
    }
    else{
        computerScore++;
        scoreCard.textContent = `${playerScore} : ${computerScore} \nYou Lost!, you choose ${playerSelection} and the computer choose ${computerSelection}`;
    }
}

function fivePoints(){
    computerSelection = getComputerChoice();
    roundWinners(playerSelection, computerSelection);
    if(playerScore === 5){
        scoreCard.textContent = `Player Won!!!, ${playerScore}:${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }
    else if(computerScore === 5){
        scoreCard.textContent = `You lost!!!, ${playerScore}:${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }
}

//call main function
let playerScore = 0;
let computerScore = 0;
let playerSelection, computerSelection;

// using dom
const body = document.querySelector('body')
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const scoreCard = document.createElement('div');
body.appendChild(scoreCard);

rock.addEventListener('click', () => {
    playerSelection = rock.value;
    fivePoints();
})

paper.addEventListener('click', () => {
    playerSelection = paper.value;
    fivePoints();
})

scissors.addEventListener('click', () => {
    playerSelection = scissors.value;
    fivePoints();
})


