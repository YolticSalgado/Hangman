let POSSIBLE_WORDS= ["obdurate", "verisimilitude", "defenestrate", 
    "obsequious", "dissonant", "toady", "imdempotent"];

function newGame(){
    let randomIndex = parseInt(
        Math.random()* POSSIBLE_WORDS.length);
    let word = POSSIBLE_WORDS[randomIndex];
    let clueString = "";
    for(let i = 0;i<word.length;i++){
        clueString+="_ ";
    }
    let clue = document.getElementById("clue");
    clue.textContent = clueString;
}
function guess(){
    
}