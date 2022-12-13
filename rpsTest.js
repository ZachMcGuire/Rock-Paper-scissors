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


function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {  
    if (computerSelection === "rock") {
      return "It is a tie!!"
    } else if (computerSelection === "paper") {
        return "The computer wins!";
      } else {
        return "You win this game!";
      }
  }
  else if (playerSelection === "paper") {  
    if (computerSelection === "paper") {
      return "It is a tie!!"
    } else if (computerSelection === "rock") {
        return "The computer wins!";
      } else {
        return "You win this game!";
      }
  } else {
    if (computerSelection === "rock") {
      return "Computer wins!";
  } else if (computerSelection === "paper") {
      return "User wins!";
  } else {
      return "Draw!";
  }
  }


}

const playerSelection = prompt(); // primary choice
const computerSelection = computerPicks(); // calls the randomized choices
console.log(playRound(playerSelection, computerSelection)); // print out the result