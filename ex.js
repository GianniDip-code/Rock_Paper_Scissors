
const options = ["rock", "paper", "scissors"]
// determine computer choise
function computerPlay() {
   const random = Math.floor(Math.random() * 3);  
   return options[random];  
}

// player choice
function playerPLay(){
   let rps = '';
   let rock = document.getElementById("rock");
   rock.addEventListener("click", () => {
      console.log("hello");
      rps = 'rock'
      return rps;
   });
   let paper = document.getElementById("paper");
   paper.addEventListener("click", () => {
      console.log("hi");
      rps = 'paper'
      return rps;
   })
   let scissors = document.getElementById("scissors");
   scissors.addEventListener("click", () => {
      console.log("fuck");
      rps = 'scissors'
      return rps;
   })
}

// one round 
function playRound(playerSelection, computerSelection) {
   let x = "";

   if (playerSelection === computerSelection) {
      console.log("Tie");
      x = "tie"
      return x;
   } 
   if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper" ) ||
      (playerSelection === "paper" && computerSelection === "rock" )
  ) {
      console.log("You Win!! " + playerSelection + " beats " + computerSelection);
      x = "player"
      return x;
   }
   if (
      (computerSelection === "rock" && playerSelection === "scissors") ||
      (computerSelection === "scissors" && playerSelection === "paper" ) ||
      (computerSelection === "paper" && playerSelection === "rock" )
   ) {
      console.log("You Lose!! " + computerSelection + " beats " + playerSelection);
      x = "computer"
      return x;
   }
}


// game
let playerScore = 0;
let computerScore = 0;



function game() {
   const computerSelection = computerPlay();   
   const playerSelection = playerPLay();  
 
   let result = playRound(playerSelection, computerSelection);
   if (result === "player") {
      playerScore += 1;
   } else if (result === "computer") {
      computerScore += 1;
   } else {
      playerScore += 0;
      computerScore += 0;
   }

   console.log("Your Score: " + playerScore);
   console.log("Computer Score: " + computerScore);
   return;
}


game();
game();
game();

// play 5 rounds
// let rounds = 5;

// for (i = 1; i <= rounds; i++) {
//    game();
// } 


// determine winner
// if (rounds === 5) {
//    if (playerScore === computerScore) {
//       // alert("DRAW");
//       console.log("DRAW");
//    } else if (playerScore > computerScore) {
//       // alert(`YOU WIN!!! :) 
//       // ${playerScore} - ${computerScore}`);
//       console.log("YOU WIN!!! :)");
//    } else {
//       // alert(`YOU LOSE :( 
//       // ${computerScore} - ${playerScore}`);
//       console.log("YOU LOSE :(");
//    }

// }