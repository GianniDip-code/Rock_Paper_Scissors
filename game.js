// variables
let playerScore = 0;
let computerScore = 0;
let playMessage = document.getElementById("play");
let pScore = document.querySelector(".player-score");
let cScore = document.querySelector(".comp-score");
let finalScore = document.getElementById("final-score");

// computer choice
const options = ["rock", "paper", "scissors"]
function computerPlay() {
   const random = Math.floor(Math.random() * 3);  
   return options[random];  
}

// player choice and game logic
const rock = document.getElementById("rock");
rock.addEventListener("click", () => {
    const playerChoice = "rock";
    const computerChoice = computerPlay();
    if (playerChoice === computerChoice) {
        playMessage.textContent = "Tie"; 
    } 
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper" ) ||
        (playerChoice === "paper" && computerChoice === "rock" )
    ) {
        playMessage.textContent = "You Win!! " + playerChoice + " beats " + computerChoice;
        playerScore += 1;
        pScore.textContent = playerScore;
    }
    if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "scissors" && playerChoice === "paper" ) ||
        (computerChoice === "paper" && playerChoice === "rock" )
    ) {
        playMessage.textContent = "You Lose!! " + computerChoice + " beats " + playerChoice;
        computerScore += 1;
        console.log(computerScore);
        cScore.textContent = computerScore;
    }
    winner();
}); 

const paper = document.getElementById("paper");
paper.addEventListener("click", () => {
    const playerChoice = "paper";
    const computerChoice = computerPlay();
     if (playerChoice === computerChoice) {
         playMessage.textContent = "Tie"; 
    } 
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper" ) ||
        (playerChoice === "paper" && computerChoice === "rock" )
    ) {
        playMessage.textContent = "You Win!! " + playerChoice + " beats " + computerChoice;
        playerScore += 1;
        pScore.textContent = playerScore;
    }
    if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "scissors" && playerChoice === "paper" ) ||
        (computerChoice === "paper" && playerChoice === "rock" )
    ) {
        playMessage.textContent = "You Lose!! " + computerChoice + " beats " + playerChoice;
        computerScore += 1;
        cScore.textContent = computerScore;
    }
    winner();
}); 

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", () => {
    const playerChoice = "scissors";
    const computerChoice = computerPlay();
     if (playerChoice === computerChoice) {
         playMessage.textContent = "Tie"; 
    } 
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper" ) ||
        (playerChoice === "paper" && computerChoice === "rock" )
    ) {
        playMessage.textContent = "You Win!! " + playerChoice + " beats " + computerChoice;
        playerScore += 1;
        pScore.textContent = playerScore;
    }
    if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "scissors" && playerChoice === "paper" ) ||
        (computerChoice === "paper" && playerChoice === "rock" )
    ) {
        playMessage.textContent = "You Lose!! " + computerChoice + " beats " + playerChoice;
        computerScore += 1;
        cScore.textContent = computerScore;
    }
    winner();
}); 

// determine winner
function winner(){
    if(playerScore === 5) {
    console.log("YOU WIN");
    finalScore.style.cssText = "color: green; font-size: 6rem; border: 10px solid var(--red); padding: 3rem 0; background: var(--yellow);"
    finalScore.textContent = `YOU WON  :)   
    REFRESH THE PAGE TO PLAY AGAIN`
} else if (computerScore === 5) {
    console.log("YOU LOSEEEEEE");
    finalScore.style.cssText = "color: green; font-size: 6rem; border: 10px solid var(--red); padding: 3rem 0; background: var(--yellow);"
    finalScore.textContent = `YOU LOST  :(   
    REFRESH THE PAGE TO PLAY AGAIN`
}
}
