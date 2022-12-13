// Explicit mapping of winning key (i.e. "rock") beating losing value (i.e. "scissors").
const whatBeatsWhat = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  }
  
  // Derive computerChoices from keys of whatBeatsWhat.
  const computerChoices = Object.keys(whatBeatsWhat)
  
  function computerPicks() {
    // Randomize rock paper and scissors.
    let randomizeChoice = Math.floor(Math.random() * computerChoices.length)
    // randomizeChoice will be one of [0,1,2] representing all possible indices of computerChoices.
    return computerChoices[randomizeChoice]
  }
  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It is a tie!!"
    }
  
    // Check if playerSelection in whatBeatsWhat maps to computerSelection
    // and if so, player has beaten computer.
    if (whatBeatsWhat[playerSelection] === computerSelection) {
      return "You win this game!"
    }
  
    // Undoubtedly, whatBeatsWhat[computerSelection] === playerSelection
    return "The computer wins!"
  }
  
  const playerSelection = prompt('rock, paper, scissors')
  const computerSelection = computerPicks()
  const result = playRound(playerSelection, computerSelection)
  console.log(`${result} (Player: ${playerSelection} vs Computer: ${computerSelection})`)