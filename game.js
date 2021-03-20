const options = ["Rock", "Paper", "Scissors"]

function computerPlay() {
   const random = Math.floor(Math.random() * 3);  // returns a random integer from 0 to 2
   console.log(options[random])   // picks from the 3 options
}

computerPlay()
