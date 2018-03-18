//html variables - for directly linking the ids to a variable making printing to them easier

// Main functions of the Game /////
    // 1. pick a random word. /////
        
                
    
    // 2. make the placeholders (in this case the underscores.) for the random word index //////

    // 3. build the logic for what happens with the user guesses. //////

        // 1. what happens if you guess right? //////
            // how do they guess? //////
                // on key up event? //////
                
            // the letter you guessed is checked against the "array" of the random word that was generated. //////
                // if the guessed letter is in the "array" of the Word that you are guessing then it replaces the underscore holding the place of that letter. //////
                // make sure to make it a loop in case the letter guessed is in the random words array more than once. ///////
                    
            // The correct guess takes the place of the underscore in the index value of the array.



        // 2. what happens if you guess wrong? //////
            // how do they guess? /////
                // on key up event? /////
            // Your total allowed guesses goes down by one. //////
            // that guess is stored somewhere. /////
                // an array that keeps those letter from being used again.
                
            // part of the hangman picture propogates. NEED TO DO!!!!!
            
            
            
        

// ============================================================================================================================== //

// Logic for round loss or wins. //
    // 1. loss - how?
        // shows the word you were supposed to guess.
        // generates another random word to guess.
        // losses variable goes up by 1

        

    // 2. win - how?
        // you win a round when you guess every letter in the word within the randomly generated word.
            // if you do that then it shows the round win screen.
                // img of the album cover and plays the song that the word was.
                // after the sound byte plays then the random generator starts again
        // wins goes up if you win a round as well
            // so have a function that checks the entirety of the word you are trying to guess and if every index has been replaced then propogate the win screen?

// =============================================================================================================================== //

// logic for total win or total loss //

// you want the game to evaluate score at the end of the game.
// AND ONLY AT THE END OF THE GAME!
    // When does the end of the game happen?
    // when the random word generator has cycled through all of the choices in the word bank.
        
    // 1. total loss
        // happens when the loss counter === above half of the total values in the word bank at the end of the game.
            // ( essentially if you lose half the rounds.)
        // if you manage a total loss then a game over alert pops up.
    // 2. total win.
        // happens when the win counter === above half ofthe total values in the word bank at the end of the game.
            // (essentially if you win more that half the rounds)
        // if you manage a total win then an alert comes up for a winner status.

