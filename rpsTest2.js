function computerPicks() {
    let compChoices = ["rock", "paper", "scissors"] // let computer pick [rock, paper, scissors]
    let randomizeChoice = Math.floor(Math.random() * compChoices.length) + 1 // randomize rock paper and scissors
   
    if (randomizeChoice === 1) {
      return "rock";
    } if (randomizeChoice === 2) {
      return "paper";
    } if (randomizeChoice === 3) {
      return "scissors";
    }
   }
   
   console.log(computerPicks()); // view computer's choice

   function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "It's a Tie";
        } else if (computerSelection === "paper") {
            return "You Lose";
        } else {
            return "You Won";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            return "It's a Tie";
        } else if (computerSelection === "rock") {
            return "You Won";
        } else {
            return "You Lose";
        }
    } else {
        if (playerSelection === "scissors") 
            if (computerSelection === "scissors") {
                return "It's a Tie";
            } else if (computerSelection === "paper") {
                return "You Won";
            } else {
                return "You Lose";
            }
    }
   }

   const playerSelection = prompt(); // primary choice
const computerSelection = computerPicks(); // calls the randomized choices
console.log(playRound(playerSelection, computerSelection)); // print out the result