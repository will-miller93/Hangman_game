
window.onload = function() {

// Any global variables that we might need. //

var wins = 0;
var losses = 0;
var allowedGuesses = 5;
var wordBank = ["wolves at night", "pride", "simple math", "top notch", "the gold"];
var usedWords = [];
var userGuess = [];
var wrongGuesses = [];
var placeHolders = [];
var randWord;



// ================================================================= // 
// find a way to start the game by pressing any button //
// find a way to automatically replace the spaces in the strings with spaces on the board.
    // try the include method
    // if (randWord.includes('-') {}
    // randWord.replace(' - ', ' ');
    
// do all of the hangman images as well.
// set them up for each time a allowed guess goes down then add another piece to the hangman board
// also set up the win screens
// get album cover images
// get mp3 of them all
// find a way to make the randomly selected wordbank value go into another array and out of the wordbank array
// set up all of the shortcut variables for printing to the display.

//======================================================================//
// initialization function //



// ==================================================================== //
// Start Game function //

    function startGame(){
        wins = 0;
        losses= 0;
        wrongGuesses = [];

        // generate random word from wordBank
        randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        console.log(randWord);
       
        // now we need to replace each index of the word chosen with underscores.
        for ( var i = 0; i < randWord.length ; i++ ) {
            placeHolders.push(" _ ");

        }
        document.getElementById("underScores").textContent = placeHolders.join(' ');
        
        // functions for the user guesses.
       
        document.onkeyup = function(event) {
            userGuess = event.key;
            // checking if the user guess is right or wrong
            if (randWord.indexOf(userGuess) > -1) {

                // find which i value userGuess matches with
                for (var i = 0; i < randWord.length; i++) {

                    if ( randWord[i] === userGuess ) {
                        placeHolders[i] = userGuess;   
                    }
                    // print it to the display
                    document.getElementById("underScores").textContent = placeHolders.join(' ');  
                }     
            }
            else {
                wrongGuesses.push(userGuess);
                allowedGuesses--;
            }
            //printing the lives and the guesses that were wrong to the display
            document.getElementById("lives-counter").textContent = allowedGuesses;
            document.getElementById("wrong-guess").textContent = wrongGuesses.join(' ');   
        }
    }
    // startGame(); 
   
// ================================================================== //
// round win or loss //
    function roundWin() {
        if ( remainingletters = 0) {
            //show album img
            //play song
            wins++;
        }
    }

    function roundLoss() {
        if ( allowedGuesses < 1 ) {
            // reset the board
            // alert you ran out of trys
            losses++
        }

    }

}
