window.onload = function() {
    
    //assign variables.
    
    // printing shortcut variables.
    var song = document.getElementById("song");
    var img = document.getElementById("image");
    var underScores = document.getElementById("underScores");
    var wrongGuess = document.getElementById("wrong-guess");
    var livesCounter = document.getElementById("lives-counter");
    var winCounter = document.getElementById("wins-counter");
    var lossCounter = document.getElementById("loss-counter");    

    //other variables needed.
    var wins = 0; 
    var losses = 0; 
    var allowedGuesses = 10; 
    var wordBank = ["wolvesatnight", "pride", "simplemath", "topnotch", "thegold"];
    var availInput = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var usedWords = []; 
    var userGuesses = []; 
    var wrongGuesses = []; 
    var placeHolders = []; 
    var randWord; 
    var lettersGuessed; 
    var matchingGuesses; 
    var numMatchingGuesses = 0; 
    var GameState = '';
    var userGuess;
//========================================================================================//

    // //game state loop//
    // document.onkeyup = function(event) {
    //     if (( event.key = "Enter" )&&( GameState = 'inactive' )) {
    //         gamePlay();
    //     }
    // }
    
//========================================================================================//
// config function. (this initial function that asks you to press enter to start the game.)\
    function config() {
        GameState = 'inactive';
        availInput = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        wordBank = ["wolvesatnight", "pride", "simplemath", "topnotch", "thegold"];
        userGuesses = [];
        wrongGuesses = [];
        allowedGuesses = 10;
        song.pause();
        console.log(GameState);
        
        
    }
        document.onkeyup = function(event) {
            if ((event.key = 'Enter')&&(GameState = 'inactive')) {
                gamePlay();
            }
            
        }
    livesCounter.textContent = allowedGuesses;
    winCounter.textContent = wins;
    lossCounter.textContent = losses;



// ======================================================================================//
//now configure the game variables that have not been configured yet. couldnt hurt to reconfigure the word bank arrays and the availableInput arrays//
    function gamePlay() {
        GameState = 'active';
        availInput = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        wordBank = ["wolvesatnight", "pride", "simplemath", "topnotch", "thegold"];   
    
        // general gameplay functions and events //

        // this will be important for deciding if the round has been won or lost //
        numMatchingGuesses = 0;
        

        // random word generation //
        randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        console.log(randWord.length);
        // replace the randWord with underscores in the html. //
        for ( var i = 0; i < randWord.length ; i++ ) {
            placeHolders.push(" _ ");
            underScores.textContent = placeHolders.join(' ');
        }
        // set up the display to show the underscores.
        
        // user guessing functions //
        document.onkeyup = function(event) {
            userGuess = event.key;
        
            // is userGuess inside the availableInput array? //
            if (availInput.indexOf(userGuess) > -1) {
                // takes the guess from availGuesses array to make it not useable again. (both arrays need to be reset in the config) //
                userGuesses.push(userGuess);
                availInput.splice(availInput.indexOf(userGuess), 1);
            
                // if it is then do the following //
                if (randWord.indexOf(userGuess) > -1) {
                
                    for (var i = 0; i < randWord.length; i++) {

                        if ( randWord[i] === userGuess ) {
                            placeHolders[i] = userGuess;
                            underScores.textContent = placeHolders.join(' ');
                            numMatchingGuesses++;
                            console.log(numMatchingGuesses);
                                   
                        }
                        
                    }
                
                }
                else {
                    // put propogation of the hangman images here. have them all numbered to correspond with number of tries left.
                    wrongGuesses.push(userGuess);
                    wrongGuess.textContent = wrongGuesses.join(' ');
                    allowedGuesses--;
                    livesCounter.textContent = allowedGuesses;
                }
                

            }
        
            // if its not then do the following//
            else {
                alert(" That is not a valid guess. You may have used that letter already. ");
            }

            if (numMatchingGuesses === randWord.length) {
                roundWin();
            }
            if (allowedGuesses === 0){
                roundLoss();
            }
            
        
        } 
          
        
    }

    function roundWin() {
        GameState = 'paused';
        wins++;
        console.log(wins);
        winCounter.textContent = wins;
        switch (randWord) {
            case ('wolvesatnight') :
                img.src = "assets/images/Virgin.jpg";
                song.src = "assets/songs/01 Wolves At Night.mp3";
                song.play();
                break;
            case ('pride') :
                img.src = "assets/images/MeanEverythingToNothing.jpg";
                song.src = "assets/songs/04 Pride.mp3";
                song.play();
                break;
            case ('simplemath') :
                img.src = "assets/images/simpleMath.jpg";
                song.src = "assets/songs/07 Simple Math.mp3";
                song.play();
                break;
            case ('topnotch') :
                img.src = "assets/images/COPE.jpg";
                song.src = "assets/songs/01 Top Notch.mp3";
                song.play();
                break;
            case ('thegold') :
                img.src = "assets/images/BlackMile.jpg";
                song.src = "assets/songs/02 The Gold.mp3";
                song.play();
                break;

        }
        document.onkeyup = function(event) {
            if ((event.key = "Enter")&&(GameState = 'paused')) {
                config();
            }
        }
    
    } 
    function roundLoss() {
        GameState = 'paused';
        losses++;
        lossCounter.textContent = losses;
        //propogate the last hangman picture.
                
        }
    } 

    

