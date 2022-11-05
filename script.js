
let totalScores = { playerScore: 0, computerScore: 0 }

function getComputerChoice() {
  const rpsChoice = ['Rock', 'Paper', 'Scissors'];
  let randomNumber = Math.floor(Math.random() * 3)
  return rpsChoice[randomNumber]
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost



  // All situations where human draws, set `score` to 0
  let score;

  if (playerChoice == computerChoice) {
    score = 0;

  }

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1;

  }
  else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1;

  }
  else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1;

  }


  // Otherwise human loses (aka set score to -1)
  else {
    score = -1;

  }


  // return score
  return score;


}
function getComputerResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost



  // All situations where human draws, set `score` to 0
  let computerResult;

  if (playerChoice == computerChoice) {
    computerResult = 0;

  }

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  else if (computerChoice == 'Scissors' && playerChoice == 'Rock') {
    computerResult = 1;

  }
  else if (computerChoice == 'Rock' && playerChoice == 'Paper') {
    computerResult = 1;

  }
  else if (computerChoice == 'Paper' && playerChoice == 'Scissors') {
    computerResult = 1;

  }
  else {
    computerResult = -1;
  }

  // return score
  return computerResult;


}


// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(playerScore, computerScore) {
  
  const result = document.getElementById('result')
  if (playerScore > computerScore) {
    result.innerText = 'You Win'
  }

  else if (playerScore < computerScore) {
    result.innerText = 'You Lose'
  }

  else {
    result.innerText = 'It is a Draw'
  }
}


// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  
  const computerChoice = getComputerChoice()
  
  let score = getResult(computerChoice, playerChoice)

  let computer = getComputerResult(playerChoice, computerChoice)

  // showResult(score,playerChoice,computerChoice)

  let playerScore = totalScores['playerScore'] += score;
  
  let computerScore = totalScores['computerScore'] += computer;

  showResult(playerScore, computerScore)
  const player = document.getElementById('player-score');
  player.innerText = `👨 Score : ${playerScore} :🤖 score : ${computerScore}`;
  const hands = document.getElementById('hands');
  hands.innerText = `👨 ${playerChoice} vs 🤖 ${computerChoice} `
}



// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {

  const rpsButtons = document.querySelectorAll('.rpsButton')
  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });

}

// ** endGame function clears all the text on the DOM **
const endGameButton = document.getElementById('endGameButton')
endGameButton.onclick = () => endGame(totalScores)
function endGame(totalScores) {
  totalScores['playerScore'] = 0;
  totalScores['computerScore'] = 0;
  const player = document.getElementById('player-score')
  player.innerText = '';
  const hands = document.getElementById('hands');
  hands.innerText = '';
  const result = document.getElementById('result')
  result.innerText = '';

}

playGame()
