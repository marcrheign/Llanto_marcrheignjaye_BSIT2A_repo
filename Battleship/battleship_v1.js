// Declaring variables
var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;
var isSUNK = false;

// Game loop
while (isSUNK === false) {
    guess = prompt("Ready! Aim! Shoot! (Enter a number 0-6):"); 

    if (guess < 0 || guess > 6){
        alert("Please enter a valid cell number!")
    }

    else{
        guesses = guesses + 1;

        if(guess == location1 || guess == location2 || guess == location3){
            hits = hits + 1;

            if (hits == 3){
                isSUNK = true;
                alert ("You sank my battleship! You win")
            }
        }
    }
}

var stats = "You sank my battleship at:" + guesses + "guesses" + "add your accuracy is : " +(3/guesses);
alert(stats);