var randomNumber = getRandomNumber(10);
var guess;
// the guess count starts out at 0
var guessCount = 0;
// the player has not yet guessed the correct number. It will be set to true
// when certain conditions have been met
var correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}

do {
    guess = prompt("I am thinking of a number between 1 and 10. What is it?")
    guessCount += 1;
    if (parseInt(guess) === randomNumber) {
        correctGuess = true;
    }
// this bang turns the boolean value around
} while ( ! correctGuess )
document.write('<h1>You have guessed the correct number!<h1>');
document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);