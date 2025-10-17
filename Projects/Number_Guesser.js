let randomNumber = Math.round(parseInt(Math.random()*100)+1)
console.log(randomNumber);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");


const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
  submit.addEventListener('click', (e)=>{
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  })
}
function validateGuess(guess){
  //* If value is correct formatted or not..
  if( isNaN(guess) ){
    alert("Please add a valid Number");
  }
  else if( guess < 1 ){
    alert("Please enter a number which is greater than 0");
  }
  else if( guess > 100 ){
    alert("Please enter number which is smaller than 101");
  }
  else{
    prevGuess.push(guess);
    if( numGuess === 11 ){
      displayGuess(guess);
      displayMessage(`Game Over, Random Number was ${randomNumber}`);
      endGame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess == randomNumber){
    displayMessage(`You guessed it right.`);
    endGame();
  }
  else if( guess < randomNumber){
    displayMessage('Number is TOOO low.');
  }
  else{
    displayMessage('Number is TOO high.')
  }
}

function displayGuess(guess){
  userInput.value = ''; //* Value ko input field se cleanup kar diya taaki ab next value de paaye user...
  guessSlot.innerHTML += `${guess},   `;
  numGuess++;
  remaining.innerHTML = `${11-numGuess}`;


}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame"> Start New Game </h2> `;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener('click', (e)=>{

    randomNumber = Math.round(parseInt(Math.random()*100)+1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML  = '';
    remaining.innerHTML = `${11-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;

  })
}