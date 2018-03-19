
window.onload = function() {
<script src="assets/javascript/game.js"></script>
// shortcuts for printing to the id in the html

var mediaPanel = document.getElementById("mediaPanel");
var hangmanAnimate = document.getElementById("hangman-animate");
var underScores = document.getElementById("underScores");
var wrongGuess = document.getElementById("wrong-guess");
var livesCounter = document.getElementById("lives-counter");
var winCounter = document.getElementById("wins-counter");
var lossCounter = document.getElementById("loss-counter");
    
// Any global variables that we might need. //

var wins = 0;
var losses = 0;
var allowedGuesses = 5;
var wordBank = ["wolvesatnight", "pride", "simplemath", "topnotch", "thegold"];
var usedWords = [];
var userGuess = [];
var wrongGuesses = [];
var placeHolders = [];
var randWord;
var lettersLeft;



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
// find a way to make the randomly selected wordbank value go into another array and out of the wordbank array///



//======================================================================//
// call start game function //
    // document.onkeyup(function (event) {
    //     startInput = event.key;
    //     if ( startInput == 'Enter') {
    //         startGame();
    //     }
    // });


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
        underScores.textContent = placeHolders.join(' ');
        
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
                    underScores.textContent = placeHolders.join(' ');  
                }     
            }
            else {
                // put propogation of the hangman images here. have them all numbered to correspond with number of tries left.
                wrongGuesses.push(userGuess);
                allowedGuesses--;
            }
            //printing the lives and the guesses that were wrong to the display
            livesCounter.textContent = allowedGuesses;
            wrongGuess.textContent = wrongGuesses.join(' ');   
        }
        // now check if they have won the round.
        // function roundWin(){
        //     if (  !=  ) {
        //         console.log("round win!!")
        //         // reset();
        //     }
             
        // }
        // roundWin();
        // // now check if they lost the round
        // function roundLoss(){
            
        //     if (allowedGuesses === 0) {
        //         console.log("round loss!!");
        //         // reset();
        //     }
        // }
        // roundLoss();
    }
    startGame();
    
    
   
// ================================================================== //
// round win or loss //
    // function roundWin() {
    //     // define the variable remaining letters.
    //     if ( placeHolders = 0) {
    //         console.log("no more letters");
    //         //show album img
    //         //play song
    //         wins++;
    //     }
    // }
    
    
    

    // function roundLoss() {
    //     if ( allowedGuesses === 0 ) {
    //         // call the start of the game again.
    //         // alert you ran out of trys
    //         losses++
            
    //     }

    // }

    // function newGame() {

    // }
    

}
