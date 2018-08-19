var possibleLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var currentIndex;

var chosenLetter = "";

var numberTries = 13;

var remainingTries = 0;

var wins = 0;

var losses = 0;

var hasFinished = false;

var wrongGuesses = [];

var gameStart = false;

var guessedLetter = "";

function resetGame() {   
gameStart = false;
remainingTries = numberTries;
currentIndex = Math.floor(Math.random() * (possibleLetters.length));
guesses = [];
chosenLetter = currentIndex;
};
function makeGuess() {
      var guessedLetter = event.key.toLowerCase();
      console.log(guessedLetter);
  if (guessedLetter !== chosenLetter) {
    document.getElementById("guessedLetter").innertext = "event.key";
    remainingTries--;
    document.getElementById("guessesLeft").innertext = ("Guesses left = " +remainingTries);
  
};
};
function checkWin() {
    if (remainingTries >= 0 && (guessedLetter === chosenLetter)) {
        wins++;
        resetGame();
        document.getElementById("wins").innerText = ("Wins = "+ wins);
    }
};
function checkLoss() {
if (remainingTries === 0) {
    hasFinished = true; 
    losses++;
    resetGame();
    document.getElementById("losses").innerText = ("Losses = "+ losses);
}
};
document.onkeydown = function(event) {
    
    checkWin();
    checkLoss();
    makeGuess();
};