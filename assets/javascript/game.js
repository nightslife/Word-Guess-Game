// Initial variables/choices
var choices = ["ALIEN", "DRACULA", "FRANKENSTEIN", "GODZILLA", "JAWS", "MARTIANS", "MUMMY", "PREDATOR", "WEREWOLF", "ZOMBIE", "KING KONG", "THE THING"];
var round = choices[Math.floor((Math.random() * 12))];
var spaces = "_";
var wins = 0;
var numberGuesses = 8;
var guessesLeft = document.getElementById("guessesLeft");
var currentGuesses = [];
var incorrect = document.getElementById("incorrect");
var allBlanksArray = Array.from(spaces.repeat(round.length));
var roundLetters = Array.from(round);
var numberWins = document.getElementById("numberWin")



console.log("The answer is: " + round);
// console.log("It has " + round.length + " letters");

// Sets the number of spaces on the html
console.log(roundLetters);
roundLetters.forEach(function (space) {
    if(space === " ") {
        console.log(roundLetters.indexOf(space));
        allBlanksArray[roundLetters.indexOf(space)] = " ";
    }
    return allBlanksArray
});

console.log(allBlanksArray)
var hidden = document.getElementById("blanks");
hidden.textContent = allBlanksArray.join("");

// Makes an array of the letter answers

// console.log(roundLetters[3]);



// Determine Key Press
document.onkeypress = function (event) {
    var letterPress = event.key.toUpperCase();
    // console.log(letterPress);
    // Compare Key Press to Letters
    if (roundLetters.indexOf(letterPress) < 0 & currentGuesses.indexOf(letterPress) < 0) {
        numberGuesses--;
        // console.log(numberGuesses);
        guessesLeft.textContent = numberGuesses;
        currentGuesses.push(letterPress);
        incorrect.textContent = currentGuesses.join(", ");
        if(numberGuesses === 0) {
            var answerText = document.getElementById("answer");
            answerText.textContent = round;
            document.getElementById("previousImg").src = "assets/images/"+round+".jpg"
        }
      }
    else for(i=0; i<roundLetters.length; i++){
            if (roundLetters[i] === letterPress){
                allBlanksArray[i] = letterPress
                hidden.textContent = allBlanksArray.join("");
            }
            if(allBlanksArray.indexOf("_") <0) {
                wins++;
                numberWins.textContent = wins
                var answerText = document.getElementById("answer");
                answerText.textContent = round;
                document.getElementById("previousImg").src = "assets/images/"+round+".jpg"
            }
        } 
    return numberGuesses

};


