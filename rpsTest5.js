function playGame() {
    let playerSelection = prompt();
    const compChoices = ['rock', 'paper', 'scissors']
    let randomizeChoice = Math.floor(Math.random() * compChoices.length) + 1 // randomize rock paper and scissors

    function computerPicks() {
        if (randomizeChoice === 1) {
            return "rock";
          } if (randomizeChoice === 2) {
            return "paper";
          } if (randomizeChoice === 3) {
            return "scissors";
          }
          const computerPicks = computerPicks()
    }

    function playerPicks () {
        if (playerSelection === "rock") {
            return 'rock';
        } else if (playerSelection === 'paper') {
            return 'paper';
        } else {
            return'scissors';
        }
    }

    function playRound() {
        if (playerSelection == computerPicks) {
            return "It's a tie!";
        } else if (playerSelection == 'rock') {
            if (computerPicks == 'paper') {
                return 'You Lost!';
            } else (computerPicks == 'scissors') {
                return 'You Win!';
            } /*else {
                return "It's annoying!";
            }*/
        } else if (playerSelection == 'paper') {
            if (computerPicks == 'rock') {
                return 'You Win!';
            } else (computerPicks == 'scissors') {
                return 'You Lost!';
            } /*else {
                return "It's a tie!";
            }*/
        } else { // if playerSelection is scissors
            if (computerPicks == 'paper') {
                return 'You Win!';
            } else (computerPicks == 'scissors') {
                return 'You Lost!';
            } /*else {
                return "It's a tie!";
            }*/
        }

        
    }
console.log(playerPicks())
console.log(computerPicks())
console.log(playRound())
}

playGame();