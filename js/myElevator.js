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

var audioElement = document.createElement('audio');
audioElement.setAttribute('src', '../audio/elevatorMusic.mp3');

audioElement.load();
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
});

 // Move Elevator Cabin Up and Down
  // Disable Respective Buttons 
  function move_img(str) {
    var step = 420; // change this to different step value
    switch(str){
    case "down":
    var x= document.getElementById("cabinElevator").offsetTop;
    x= x + step;
    document.getElementById("cabinElevator").style.top= x + "px";
    break;

    case "up":
    var x= document.getElementById("cabinElevator").offsetTop;
    x= x - step;
    document.getElementById("cabinElevator").style.top= x + "px";
    break;
    
    //case "up":
    //var x=document.getElementById("cabinElevator").offsetTop;
    //x= x -step;
    //document.getElementById("cabinElevator").style.top= x + "px";
    //document.getElementById("output").innerHTML = 'Going Up';
    //break;    
    }
  }

  // Hide Cabin Elevator
  //function hideCabinElevator() {
   // document.getElementById("cabinElevator").style.visibility = "hidden";
 // }

  // Show Cabin Elevator (Inside The Elevator)
  //function showCabinElevator() {
   // document.getElementById("cabinElevator").style.visibility = "visible";
 // }

  // Default Elevator State is Doors Closed
 // function defaultElevatorState(){
   // hideCabinElevator();
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


// Prevent Elevator From Passing Set Limits
//function disableFirstFloorElevatorButtons(){
  //document.getElementById('groundFloorElevatorUpButton').classList.add("disabled");
  //document.getElementById('groundFloorElevatorDownButton').classList.remove("disabled");
//}

// Prevent Elevator From Passing Set Limits
//function disableGroundFloorElevatorButtons(){
  //document.getElementById('groundFloorElevatorDownButton').classList.add("disabled");
  //document.getElementById('groundFloorElevatorUpButton').classList.remove("disabled");
//}

//setTimeout( function() { hideElevator(); }, 3000);
//groundFloorElevator.style.visibility = "visible";
