
var possibleLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var currentIndex;
console.log(currentIndex);
var chosenLetter = possibleLetters[currentIndex];
console.log(chosenLetter);

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
console.log(currentIndex);
guesses = [];

};
function makeGuess() {
    guessedLetter = event.key.toLowerCase();
      console.log(guessedLetter);
  if (guessedLetter !== chosenLetter) {
    wrongGuesses.push("guessedLetter")
    document.getElementById("guessedLetter").innertext = guessedLetter;
    remainingTries--;
    document.getElementById("guessesLeft").innerHTML = ("Guesses left = " +remainingTries);
  
};
};
function checkWin() {
    if (remainingTries >= 0 && (guessedLetter === chosenLetter)) {
        hasFinished = true;
        wins++;
        
        document.getElementById("wins").innerText = ("Wins = "+ wins);
        resetGame();
    }
};
function checkLoss() {
if (remainingTries === 0) {
    hasFinished = true; 
    losses++;
    
    document.getElementById("losses").innerText = ("Losses = "+ losses);
    resetGame();
}
};
document.onkeydown = function(event) {
    
    checkWin();
    checkLoss();
    makeGuess();
};