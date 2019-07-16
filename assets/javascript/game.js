// Initial variables/choices
var choices = ["ALIEN", "DRACULA", "FRANKENSTEIN", "GODZILLA", "JAWS", "MARTIANS", "MUMMY", "PREDATOR", "WEREWOLF", "ZOMBIE", "KING KONG", "THE THING"];
var round = choices[Math.floor((Math.random() * 10))];
var spaces = "_ ";
var wins = 0;
var numberGuesses = 8;
var guessesLeft = document.getElementById("guessesLeft")



console.log("The answer is: " + round);
console.log("It has " + round.length + " letters");

// Sets the number of spaces on the html
var hidden = document.getElementById("blanks");
hidden.textContent = spaces.repeat(round.length);

// Makes an array of the letter answers
var roundLetters = Array.from(round);
console.log(roundLetters[3]);


// Determine Key Press
document.onkeypress = function (event) {
    var letterPress = event.key.toUpperCase();
    console.log(letterPress);
    // Compare Key Press to Letters
    if (roundLetters.indexOf(letterPress) === -1) {
        numberGuesses--;
        console.log(numberGuesses);
        guessesLeft.textContent = numberGuesses

    }
};

