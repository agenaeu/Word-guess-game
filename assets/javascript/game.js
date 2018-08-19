// word possibilities
var wordChoices = ["ARYA", 
"BRAN", 
"BRIENNE", 
"CERSEI", 
"DAENERYS", 
"HOUND", 
"JAMIE", 
"JOFFREY", 
"JON", 
"LITTLEFINGER", 
"MARGAERY", 
"MELISANDRE", 
"NED", 
"SANSA", 
"THEON", 
"TYRION",
];

// number of tries
const numTries = 9;

// letters already chosen
var chosenLetters = []
// index of current word
var currentIndex;
// word we're making
var currentWord = []
// remaining tries
var remainingTries = 0;
var gameStart = false;
// press any key to try again alert
var hasFinished = false;
// # of wins player has
var wins = 0;

// sounds
/* var keySound = new Audio('.assets/sounds/');
var winSound = new Audio('.asssets/sounds/win');
var loseSound = new Audio(); */

// resets game
function resetGame() {
    remainingTries = numTries;
    gameStart = false;

    // choose a word randomly
    currentIndex = Math.floor(Math.random() * (wordChoices.length));

    // clear out arrays 
    chosenLetters = [];
    currentWord = [];
    // clears hangman image
    document.getElementById("hangman-Image").src = "";
    // current word guessing
    for (var i = 0; i < wordChoices[currentIndex].length; i++) {
        currentWord.push("_");
    }

    // game over images/text
    /* document.getElementById("pressKeyTryAgain").style.cssText = "display: none";
    document.getElementById("gameover-image").style.cssText = "display: none";
    document.getElementById("youwin-image").style.cssText = "display: none"; */
    
    // display
    updateDisplay();
};
// update display on html
function updateDisplay() {
    document.getElementById("wins").innerText = wins;
    document.getElementById("currentWord").innerText = "";

    // Display how much of the word we've guessed on HTML
    // Printing the array would have (,) - so we concatenate a string from each value in the array.
    var currentWordText = "";
    for (var i = 0; i < currentWord.length; i++) {
        document.getElementById("currentWord").innerText += currentWord[i];
    }
    document.getElementById("remainingTries").innerText = remainingTries;
    document.getElementById("chosenLetters").innerText = chosenLetters;
    if(remainingTries <= 0) {
        hasFinished = true;
    }
};

// updates the image based on guesses
function updateHangmanImage() {
    document.getElementById("hangman-Image").src = "assets/images/Hangman-image-"+(numTries - remainingTries)+".png";
};

// puts all instances of letter in string
function evaluateGuess(letter) {
    var positions = [];
 
    for (var i = 0; i < wordChoices[currentIndex].length; i++) {
        if (wordChoices[currentIndex][i] === letter) {
            positions.push(i);
        }
    }
    if (positions.length <= 0) {
        remainingTries--;
        updateHangman();
    }
    else {
        for (var i = 0; i < positions.length; i++) {
            currentWord[positions[i]] = letter;
        }
    }
};

// how to check for a win
function checkWin() {
    if (currentWord.indexOf("_") === -1) {
      /*   document.getElementById("youwin-image").style.cssText = "display: block";
        document.getElementById("pressKeyTryAgain").style.cssText = "display: block"; */
        wins++;
        /* winSound.play(); */
        hasFinished = true;
    }

};
// check for loss
function checkLoss() {
    if (remainingTries <= 0) {
        /* losingSound.play(); */
        /* document.getElementById().style.cssText = "display: block";
        document.getElementById().style.cssText = "display: block"; */
        hasFinished = true;
    }
}; // check this later
// making a guess
function makeGuess(letter) {
    if (remainingTries > 0) {
        if (hasFinished) {
            hasFinished = true;
        }
        // checks to see if letter was used
        if (chosenLetters.indexOf(letter) === -1) {
            chosenLetters.push(letter);
            /* evaluateGuess(letter); */
        }
    }
};

// event
document.onkeyup = function (event) {
    // if game over press key for new game
    if (hasFinished) {
        resetGame();
        hasFinished = false;
    }
    else {
        // checks a letter was pressed
        if (event.keyCode >= 65 && event.keyCode <= 90) {
         /*    keySound.play(); */
         console.log(event.keyCode);
         console.log(event.key);
            makeGuess(event.key.toUpperCase());
            updateDisplay();
            checkWin();
            checkLoss();
        }
    }
};










