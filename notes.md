## How is Hangman played IRL?
1. Draw the starting point
2. Pick a word -> A list of possible words, save one of them into a variable
3. Draw dashes -> 1 dash for each letter in the word
    a. for loop?
4. Guess Time
    a. Give an input -> Letter
    b. Check if the letter is in th string
        aa. If its in the string, replace dash with the letter
        ab. If not in the string, draw the next step
        ac. No matter, keep track of guesses user did
            ba. Don't let same guess more than 1
5. Game Ends
    a. If they guess the whole word -> game ends -> you win
    b. If the full body drawn -> game ends -> you lose