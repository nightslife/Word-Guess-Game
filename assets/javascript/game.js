// Initial variables/choices
var choices = ["ALIEN", "DRACULA", "FRANKENSTEIN", "GODZILLA", "JAWS", "MARTIANS", "MUMMY", "PREDATOR", "WEREWOLF", "ZOMBIE", "KING KONG", "THE THING","GHOST",
"INVISIBLE MAN"];
var spaces = "_";
var wins = 0;
var guessesLeft = document.getElementById("guessesLeft");
var incorrect = document.getElementById("incorrect");
var numberWins = document.getElementById("numberWin");
var alphabet = /^[a-zA-Z]+$/;
const lossSound = new Audio()



// console.log("It has " + round.length + " letters");


// New game function
function newGame(){
    //game variables
    var round = choices[Math.floor((Math.random() * 14))];
    var numberGuesses = 8;
    guessesLeft.textContent = numberGuesses
    var currentGuesses = [];
    incorrect.textContent = currentGuesses
    var allBlanksArray = Array.from(spaces.repeat(round.length));
    var roundLetters = Array.from(round);

// Sets the number of spaces on the html
    roundLetters.forEach(function (space) {
        if(space === " ") {
            console.log(roundLetters.indexOf(space));
            allBlanksArray[roundLetters.indexOf(space)] = " ";
        }
        return allBlanksArray
    });


    var hidden = document.getElementById("blanks");
    hidden.textContent = allBlanksArray.join("");

    // Makes an array of the letter answers

    // console.log(roundLetters[3]);



    // Determine Key Press
    document.onkeypress = function (event) {
        var letterPress = event.key.toUpperCase();
        function losingSound(){
            var scream = Math.random() < 0.5 ? "FemaleScream" : "WilhelmScream";
            lossSound.src = "assets/soundfiles/"+scream+".mp3";
            lossSound.play();
        }
        // console.log(letterPress);
        // Compare Key Press to Letters
        if (letterPress.match(alphabet)) {
            if (roundLetters.indexOf(letterPress) < 0 & currentGuesses.indexOf(letterPress) < 0) {
                numberGuesses--;
                guessesLeft.textContent = numberGuesses;
                currentGuesses.push(letterPress);
                incorrect.textContent = currentGuesses.join(", ");
                if(numberGuesses === 0) {
                    var answerText = document.getElementById("answer");
                    answerText.textContent = round;
                    document.getElementById("previousImg").src = "assets/images/"+round+".jpg";
                    losingSound();
                    newGame()
                }
            }
            else for(i=0; i<roundLetters.length; i++){
                    if (roundLetters[i] === letterPress){
                        allBlanksArray[i] = letterPress
                        hidden.textContent = allBlanksArray.join("");
                    }
                    if(allBlanksArray.indexOf("_") <0) {
                        wins++;
                        numberWins.textContent = wins;
                        var answerText = document.getElementById("answer");
                        answerText.textContent = round;
                        document.getElementById("previousImg").src = "assets/images/"+round+".jpg";
                        newGame()
                    }
                } 
        }
    };
}
newGame()