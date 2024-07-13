var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

// Function to play next sequence
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // Flash animation and play sound
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

// Function to play sound for a given color
function playSound(name) {
  var audio = new Audio(name + ".mp3");
  audio.play();
}
function playSound(name) {
    var audio = new Audio(name + ".mp3");
    audio.play();
  }
  function playSound(name) {
    var audio = new Audio(name + ".mp3");
    audio.play();
  }
  function playSound(name) {
    var audio = new Audio(name + ".mp3");
    audio.play();
  }
      

// Event handler for button clicks
$("button").on("click", function() {
  var userChosenColour = $(this).attr("id");
  playSound(userChosenColour);
  // You can add more logic here for checking user input against gamePattern
});

// Example usage:
nextSequence(); // Call nextSequence to start the game
