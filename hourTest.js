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
const playerSelection = prompt(); // primary choice
const computerSelection = computerPicks(); // calls the randomized choices
console.log(playerSelection)



if (playerSelection == "rock") {
    if (computerSelection == "rock") {
        console.log("It's a Tie");
    } else if (computerSelection == "paper") {
        console.log("You Lose");
    } else {
        console.log("You Won");
    }
} else if (playerSelection == "paper") {
    if (computerSelection == "paper") {
        console.log("It's a Tie");
    } else if (computerSelection == "rock") {
        console.log("You Won");
    } else {
        console.log("You Lose");
    }
} else {
    if (playerSelection == "scissors") 
        if (computerSelection == "scissors") {
            console.log("It's a Tie");
        } else if (computerSelection == "paper") {
            console.log("You Won");
        } else {
            console.log("You Lose");
        }
}
if (computerSelection === "scissors"){
    console.log('finally');
}


/*const playerSelection = prompt(); // primary choice
const computerSelection = computerPicks(); // calls the randomized choices
console.log(playRound(playerSelection, computerSelection)); // print out the result*/