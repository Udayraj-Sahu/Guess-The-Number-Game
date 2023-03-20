let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textoutput");
let userNumberupdate = document.getElementById("inputBox");

const init = () => {
  computerGuess = Math.floor(Math.random() * 100);
  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
};

const startGame = () => {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
};

const newGameBegin = () => {
  window.location.reload();
};

const startNewGame = () => {
  document.getElementById("newGameButton").style.display = "inline";
  userNumberupdate.setAttribute("disabled", true);
};

const compareGuess = () => {
  const userNumber = Number(document.getElementById("inputBox").value);
  userGuess = [...userGuess, userNumber];
  document.getElementById("guesses").innerHTML = userGuess;
  //start new game

  // check the value low or high
  if (userGuess.length < maxGuess) {
    if (userNumber > computerGuess) {
      userGuessUpdate.innerHTML = "Your Guess Is High 😯";
      userNumberupdate.value = "";
      startNewGame();
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML = "Your Guess Is Low 😒";
      userNumberupdate.value = "";
      startNewGame();
    } else {
      userGuessUpdate.innerHTML = "Hurry! Right Guess😍";
      userNumberupdate.value = "";
      startNewGame();
    }
  } else {
    if (userNumber > computerGuess) {
      userGuessUpdate.innerHTML = `You Loose!! Correct Number Was ${computerGuess}`;
      userNumberupdate.value = "";
      startNewGame();
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML = `You Loose!! Correct Number Was ${computerGuess}`;
      userNumberupdate.value = "";
      startNewGame();
    } else {
      userGuessUpdate.innerHTML = "Hurry! Right Guess😍";
      userNumberupdate.value = "";
      startNewGame();
    }
  }
  document.getElementById("attempts").innerHTML = userGuess.length;
};

const easyMode = () => {
  maxGuess = 10;
  startGame();
};

const hardMode = () => {
  maxGuess = 5;
  startGame();
};
