// var numberOptions = [10, 5, 3, 7]; number options are no longer needed if guessing random

var winCounter = 0;
var lossCounter = 0;
var targetNumber = Math.floor(Math.random() * 120);

$("#number-to-guess").text(targetNumber);

var counter = 0;

// We begin by expanding our array to include four options.
function startGame(){
  $("img").each(function(){
    $(this).attr("data-value", Math.floor(Math.random() * 12) + 1);
  });
}

//Using jquery to select an element with the id  winCounter and setting the html to the value of my
//winCounter variable.
$("#winCounter").html(winCounter);

$("#lossCounter").html(lossCounter);

// var imageCrystal = $("<img>");

$(".drink-images").on("click", function(){
  
  //parse int will turn a string into a number
  // .attr is getting the value of the data-value attribute
  var test = parseInt($(this).attr("data-value"));
  
  console.log("Test:", test);

  // counter variable is equal to the counter + test
  counter = counter + test;
  $("#score").text(counter);

  console.log("Counter: ", counter);


  if (counter === targetNumber) {
    alert("You win!");
    winCounter++; {
      reset();
    }
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
    lossCounter++;
    reset();
  }

});

    

function reset(){
   //Update the html to reflect the wins and losses
   $("#winCounter").html(winCounter);

   $("#lossCounter").html(lossCounter);
  //  reset counter
  counter = 0;
  // get a new targetnumber
  targetNumber = Math.floor(Math.random() * 120);
  // images need to be given a new value
  $("#number-to-guess").text(targetNumber);

  $("#score").text(counter);

  startGame();
  }

startGame();
// $("#number-to-guess").text(targetNumber);
