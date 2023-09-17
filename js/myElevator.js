// Default Elevator Cabin State is Elevators Doors Closed 
function defaultElevatorCabinState(){
  document.getElementById("cabinElevator").style.visibility = "hidden";
  //Elevator is at the ground floor
  disableFirstFloorElevatorButtons();
}

// Show Cabin Elevator (Inside The Elevator)
function showCabinElevator() {
  document.getElementById("cabinElevator").style.visibility = "visible";
 }

 // Move Elevator Cabin Up and Down
 function move_img(str) {
  var step = 420;
  switch(str) {  
  
  // Elevator is going down!
  case "down":
  showCabinElevator();
  disableFirstFloorElevatorButtons();
  var x = document.getElementById("cabinElevator").offsetTop;
  x = x + step;
  document.getElementById("cabinElevator").style.top = x + "px";
  break;

  // Elevator is going up!
  case "up":
  showCabinElevator();
  disableGroundFloorElevatorButtons();
  var x = document.getElementById("cabinElevator").offsetTop;
  x = x - step;
  document.getElementById("cabinElevator").style.top= x + "px";
  break;
  }
}

// Prevent Ground Floor Elevator From Passing Set Limits
function disableGroundFloorElevatorButtons(){
  document.getElementById('groundFloorElevatorUpButton').classList.add("disabled");
  document.getElementById('firstFloorElevatorDownButton').classList.remove("disabled");
}

// Prevent First Floor Elevator From Passing Set Limits
function disableFirstFloorElevatorButtons(){
  document.getElementById('firstFloorElevatorDownButton').classList.add("disabled");
  document.getElementById('groundFloorElevatorUpButton').classList.remove("disabled");
}

// Show Output To The User In The Textbox
//const outputDisplay = document.getElementById("output");

// Elevator Buttons
//const theGroundFloorElevatorUpButton = document.getElementById('groundFloorElevatorUpButton');
//const theGroundFloorElevatorDownButton = document.getElementById('groundFloorElevatorDownButton');

// First Floor Elevator
//const firstFloorElevator = document.getElementById("firstFloorElevator");

// Ground Floor Elevator
//const groundFloorElevator = document.getElementById("groundFloorElevator");

// Cabin Elevator
//const cabinElevator = document.getElementById("cabinElevator");

// Elevator Audio Player

//var audioElement = document.createElement('audio');
///audioElement.setAttribute('src', '../audio/elevatorMusic.mp3');

//audioElement.load();

/*
audioElement.addEventListener("canplay", function() {
  audioElement.play();
}, true);

audioElement.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, true);


$(document).on('click', '.play', function() {
  audioElement.play();
  $(this).removeClass('play').addClass('pause');
  $('a .fa-volume-off').removeClass('fa-volume-off').addClass('fa-volume-up');
});


$(document).on('click', '.pause', function() {
  audioElement.pause();
  $(this).removeClass('pause').addClass('play');
  $('a .fa-volume-up').removeClass('fa-volume-up').addClass('fa-volume-off');
}); */ 



  // Hide Cabin Elevator
  //function hideCabinElevator() {
   // document.getElementById("cabinElevator").style.visibility = "hidden";
 // }

  // Show Cabin Elevator (Inside The Elevator)
  //function showCabinElevator() {
   // document.getElementById("cabinElevator").style.visibility = "visible";
 // }


  // Hide Ground Floor Elevator
//function hideGroundFloorElevator(){
  //document.getElementById("groundFloorElevator").style.visibility = "hidden";
//}

// Show Ground Floor Elevator
//function showGroundFloorElevator(){
  //document.getElementById("groundFloorElevator").style.visibility = "visible";
//}

  // Hide First Floor Elevator
 // function hidefirstFloorElevator(){
   // document.getElementById("firstFloorElevator").style.visibility = "hidden";
  //}

  // Show First Floor Elevator
  //function showfirstFloorElevator(){
   // document.getElementById("firstFloorElevator").style.visibility = "visible";
  //}




//setTimeout( function() { hideElevator(); }, 3000);
//groundFloorElevator.style.visibility = "visible";
