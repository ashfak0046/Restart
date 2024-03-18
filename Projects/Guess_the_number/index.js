const userInput = document.querySelector(".guessField");
// console.log(userInput);
const submit = document.querySelector(".guessSubmit");
// console.log(submit);
const guessSlot = document.querySelector(".guesses");
// console.log(guessSlot);
const remaining = document.querySelector(".lastResult");
// console.log(remaining);
const lowOrHigh = document.querySelector(".lowOrHi");
// console.log(lowOrHigh);
const startOver = document.querySelector(".resultParas");
console.log(startOver);

let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber)

let p = document.createElement("p");

let prevGuess = [];
let numberGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess); // 1
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Enter a valid number");
  } else if (guess < 1) {
    alert("Enter a number more than 1");
  } else if (guess > 100) {
    alert("Enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numberGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over! random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right!!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Your number was too LOW!`);
  } else if (guess > randomNumber) {
    displayMessage(`Your number was too HIGH!`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML = guessSlot.innerHTML + `${guess},`;
  numberGuess++;
  remaining.innerHTML = `${11 - numberGuess}`;
}
function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame"> Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  startGame();
}
function startGame() {
  const newButton = document.querySelector("#newGame");
  newButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numberGuess = 1;
    guessSlot.value = "";
    remaining.innerHTML = `${11 - numberGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
