var randomLoc = Math.floor(Math.random() * 5); // randomizes the location of the ship
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;


while (isSunk === false) {
    guess = prompt("Ready, aim, fire! (choose a number 0-6):"); // prompts a box to enter a number

    if (guess < 0 || guess > 6) // makes sure the user cannot go below 0 or above 6
    {
        alert("Please choose a valid number!"); 
    } 
else {
    guesses = guesses + 1; // if the number is valid, add one to guesses

    if(guess == location1 || guess == location2 || guess == location3){ //if one of the locations are hit, write out hit and add one to the counter
        alert("hit!");
        hits = hits + 1;
    }
    else {
        alert("miss!");// if no locations are hit, write out "miss"
    }
    if (hits == 3) { // if you hit all 3 locations, write out "you sank my battleship" and end the loop
        isSunk=true;
        alert("You sank my battleship!");
    }

}
}




var stats= "you took " + guesses + " guesses to sink the battleship " + "which means your shooting accuracy was "+ (3/guesses * 100)+ "%"; // after the loop, write out how many guesses it took and the percent accuracy.

alert(stats);