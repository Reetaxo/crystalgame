// var numberOptions = [10, 5, 3, 7]; number options are no longer needed if guessing random

var winCounter = 0;
var lossCounter = 0;
var targetNumber = Math.floor(Math.random() * 120);
$("#number-to-guess").text(targetNumber);

var counter = 0;

// We begin by expanding our array to include four options.
var gin1 = Math.floor(Math.random() * 12);
var gin2 = Math.floor(Math.random() * 12);
var gin3 = Math.floor(Math.random() * 12);
var gin4 = Math.floor(Math.random() * 12);

$("#winCounter").html(winCounter);
$("#lossCounter").html(lossCounter);

// var imageCrystal = $("<img>");

function reset(){

}

alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

function reset(){
    if (counter >= targetNumber) {
      var counter = 0;
    }




// $("#number-to-guess").text(targetNumber);
