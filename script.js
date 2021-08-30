let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below for the game:

//Generate the New Secret Target Number
const generateTarget = () => {
  return Math.floor(Math.random() * 9);
}

//Calculate who won!
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {

  const humanDifference = Math.abs(targetGuess - humanGuess)
  const computerDifference = Math.abs(targetGuess - computerGuess)
  return humanDifference <= computerDifference;
}

//Update the score
const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++
  }
}

//Update the next round number
const advanceRound = () => currentRoundNumber++;

//debug
updateScore('human');
console.log(humanScore); // To confirm that this value increased by 1
updateScore('computer');
console.log(computerScore); // To confirm that this value increased by 1