let POSSIBLE_WORDS= ["obdurate", "verisimilitude", "defenestrate", 
    "obsequious", "dissonant", "toady", "imdempotent"];
let guesses = "";
let word = "";
let MAX_GUESSES = 6;
let guessCount = MAX_GUESSES;
function newGame(){

    //Addition 4 to Quest 3 - Hangman
    let inputBox = document.getElementById("guess");
    let inputButton = document.getElementById("guessbutton");
    inputBox.disabled = false;
    inputButton.disabled = false;
    //Addition 4 to Quest 3 - Hangman

    guesses="";
    guessCount = MAX_GUESSES;
    let randomIndex = parseInt(
        Math.random()* POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    updateScreen();
}
function guess(){
    let input = document.getElementById("guess");
    let letter = input.value;

    //Addition 5.5 to Quest 3 - Hangman (Prevents blank inputs)
    if(letter == ""){
        return;
    }
    //Addition 5.5 to Quest 3 - Hangman (Prevents blank inputs)

    //Addition 5 to Quest 3 - Hangman
    if(guesses.indexOf(letter) >= 0){
        alert("You already guessed " + letter + "!");
        input.value = "";
        return;
    }
    //Addition 5 to Quest 3 - Hangman



    if(word.indexOf(letter)<0){
        guessCount--;
    }
    guesses+=letter;
    updateScreen();
    //Mini Addition 3 to Quest 3 - Hangman
    input.value = "";
    //Mini Addition 3 to Quest 3 - Hangman
}

//Addition 3 to Quest 3 - Hangman
function clearInputBox(){
    let input = document.getElementById("guess");
    input.value = "";
}
//Addition 3 to Quest 3 - Hangman

function updateScreen(){
    let clueString = "";
    for(let i = 0;i<word.length;i++){
        let letter = word.charAt(i);
        if(guesses.indexOf(letter) >= 0){
            clueString+=letter+" ";
        }
        else{
            clueString+="_ ";
        }
    }
    let clue = document.getElementById("clue");
    clue.textContent = clueString;

    let guessArea = document.getElementById("guesses");
    guessArea.textContent = "Guessed Letters: " +guesses;

    //Addition 1 to Quest 3 - Hangman
    if (clueString.indexOf("_") < 0) {
        guessArea.textContent = "You win! The word was " + word;
        //Addition 2 to Quest 3 - Hangman
        let inputBox = document.getElementById("guess");
        let inputButton = document.getElementById("guessbutton");
        inputBox.disabled = true;
        inputButton.disabled = true;
        //Addition 2 to Quest 3 - Hangman
    }
    else if (guessCount == 0) {
        guessArea.textContent = "You lose! The word was " + word;
        //Addition 2 to Quest 3 - Hangman
        let inputBox = document.getElementById("guess");
        let inputButton = document.getElementById("guessbutton");
        inputBox.disabled = true;
        inputButton.disabled = true;
        //Addition 2 to Quest 3 - Hangman
    }
    //Addition 1 to Quest 3 - Hangman
    
    let image = document.getElementById("hangmanpic");
    image.src = `images/hangman${guessCount}.gif`;
}