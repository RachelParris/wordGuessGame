
      // Created an empty array to add all your words that the opponent might get. 
      var citiesList = [];
      var input;
      var city;
      var win =0;
      var loss = 0;

function updateScore() {
        document.querySelector("#win").innerHTML = win;
        document.querySelector("#loss").innerHTML = loss;
      }      

function twoPlayers() { 
      // For-Loop that will repeat three times.
      for (var i = 1; i < 5; i++) {

        // Each time it asks the user for their #1, #2, #3 or #4 city choices.
        input = prompt("PLAYER ONE: What's your #" + i + " favorite Cities in the World?");
        city = input.toLowerCase();
        // It then takes the user's response and "pushes" (or adds) the variable to the end of the citiesList array.
        citiesList.push(city);
      }

      var randomCity = citiesList[Math.floor(Math.random() * citiesList.length)];
    //   console.log(randomCity);

        var answerArray = [];
        var allTry = []; 
        for (var i = 0; i < randomCity.length; i++) {
            answerArray[i] = "_";
            }
        var remainingLetters = randomCity.length; // should reduce everytime a letter is played correctly.
        var guessAllowed = remainingLetters+5;
           
        // console.log (guessAllowed);
        while (remainingLetters >0) { // should the number of tries be limited something related to the remaining length?
            //code
            //progress  
            alert("Favorite city is: " + answerArray.join(" ") + "    Letters played till now:" + allTry.join (",") + "          You have " + remainingLetters +" remaining letters left & "+guessAllowed + " number of guesses left." );
            // alert(answerArray.join(" "));

            
            //take input
            //update answerArray, remainingLetter and guesses left
                var guess = prompt("PLAYER 2: Guess a letter, or click Cancel to stop playing.");

                if (guess === null) {
                    // alert ("you ended the game");
                break;
                } else if (guess.length !== 1) {
                alert("PLAYER 2: Please enter a single letter.");
                } else {
                // Update the game state with the guess & print the guess on the footer
                    // document.getElementById("user-text").innerHTML = guess;
                    var guessUp = guess.toUpperCase();
                    allTry.push(guessUp);
                    guessAllowed--;
                    if (guessAllowed === 0) {
                        alert ("PLAYER 2: You have no more guesses left.");
                        loss++;
                        updateScore();
                        break;
                    }
                    for (var j = 0; j < randomCity.length; j++) {
                    
                            if (randomCity[j] === guess) {
                                answerArray[j] = guess;
                                remainingLetters--;
                                    if (remainingLetters === 0){
                                        win++;
                                        updateScore();
                                    }
                                }
                            }
                    
                }
        }
        alert(answerArray.join(" "));     
        alert("One of my favorite cities is " + randomCity +". Have you ever been? ");
        // document.write ("Wins: " + win + ". Losses : "+ loss+".")
        
}



function onePlayer() {
var preCitiesList = ["barcelona","amsterdam", "kolkata", "newdelhi", "florence", "sanfrancisco", "newyork","helsinki","vacouver","toronto", "chicago","singapore", "kyoto"];
    // alert ("HOLD YOU HORSES, CODING IN PROGRESS.");

var preRandomCity = preCitiesList[Math.floor(Math.random() * preCitiesList.length)];
    //   console.log(preRandomCity);

        var answerArray = [];
        var preAllTry = []; 
        for (var i = 0; i < preRandomCity.length; i++) {
            answerArray[i] = "_";
            }
        var remainingLetters = preRandomCity.length; // should reduce everytime a letter is played correctly.
        var guessAllowed = remainingLetters+5;

        while (remainingLetters >0) { // should the number of tries be limited something related to the remaining length?
            //code
            //progress  alert(answerArray.join(" "));


            alert("Guess my favorite city: " + answerArray.join(" ") + "    Letter played till now:" + preAllTry.join (",") + "          You have " + remainingLetters+" remaining letters left & "+guessAllowed + " number of guesses left.");
            //take input
            //update answerArray, remainingLetter and guesses left
                var guess = prompt("PLAYER 2: Guess a letter, or click Cancel to stop playing.");
                if (guess === null) {
                    // alert ("you ended the game");
                break;
                } else if (guess.length !== 1) {
                alert("PLAYER 2: Please enter a single letter.");
                } else {
                // Update the game state with the guess
                var guessUp = guess.toUpperCase();
                    preAllTry.push(guessUp);
                    guessAllowed--;
                    if (guessAllowed === 0) {
                        alert ("You have no more guesses left.");
                        loss++;
                        updateScore();
                        break;
                    }
                    for (var j = 0; j < preRandomCity.length; j++) {
                            if (preRandomCity[j] === guess) {
                            answerArray[j] = guess;
                            remainingLetters--;
                            if (remainingLetters === 0){
                                win++;
                                updateScore();
                            }
                            }
                        }
                    
                }
        }
    alert(answerArray.join(" "));     
    alert("One of my favorite cities is " + preRandomCity +". Have you ever been? ");

}