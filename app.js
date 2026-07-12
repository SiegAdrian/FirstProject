const wordElement = document.querySelector(".word");
const oldWordsElement = document.querySelector(".old-words");

// Wortliste laden und in ein Array speichern
let words = [];
let currentWord = "";
let previousWords = [];

fetch("words.txt")
    .then(function(response) {
    return response.text();
}).
then(function(text) {
  
  words = text.split(",");
});


// Funktion, die beim Klicken auf den Button aufgerufen wird
function onClick() {
    if(currentWord !== "") {
        previousWords.push(currentWord);
    }

    currentWord = getRandomWord();
    wordElement.innerHTML = currentWord;
    oldWordsElement.innerHTML = previousWords.join(", ");
}




function getRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}

function getRandomWord() {
    let randomIndex = getRandomNumber(words.length);
    return words[getRandomNumber(words.length)];
}