// Set random starting location for the battleship
const randomLoc = Math.floor(Math.random() * 5);
const location1 = randomLoc;
const location2 = randomLoc + 1;
const location3 = randomLoc + 2;

let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (!isSunk) {
    guess = prompt("Ready! Aim! Fire! (Enter a number 0-6):");

    if (guess === null) {
        alert("Thank you for playing!");
        break;
    }

    guess = Number(guess);

    if (isNaN(guess) || guess < 0 || guess > 6) {
        alert("Please enter a valid number between 0 and 6.");
    } else {
        guesses++;

        if (guess === location1 || guess === location2 || guess === location3) {
            alert("Hit!");
            hits++;

            if (hits === 3) {
                isSunk = true;
                alert(`You sank the battleship in ${guesses} guesses!`);
            }
        } else {
            alert("Miss!");
        }
    }
}

var accuracy = (guesses > 0 ? (hits / guesses) * 100 : 0).toFixed(2);
var stats = "You took " + guesses + " guesses to sink the battleship! " + "Accuracy: " + accuracy + "%";

alert(stats);

var accuracy;
if (guesses > 0) {
    accuracy = ((hits / guesses) * 100).toFixed(2);
} else {
    accuracy = (0).toFixed(2);
}
