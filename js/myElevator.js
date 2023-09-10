// Elevator Buttons
const theGroundFloorElevatorUpButton = document.getElementById('groundFloorElevatorUpButton');
const theGroundFloorElevatorDownButton = document.getElementById('groundFloorElevatorDownButton');

// First Floor Elevator
const firstFloorElevator = document.getElementById("firstFloorElevator");

// Ground Floor Elevator
const groundFloorElevator = document.getElementById("groundFloorElevator");

// Cabin Elevator
const cabinElevator = document.getElementById("i1 ttf-steps");

// Show Output
const outputDisplay = document.getElementById("output");

// Elevator Audio Player

const button = document.querySelector("#audiobutton");
const icon = document.querySelector("#audiobutton > i");
const audio = document.querySelector("audio");
const image = document.querySelector("image");

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 0.2;
    audio.play();
    icon.classList.remove('fa-solid fa-volume-high');
    icon.classList.add('fa-solid fa-volume-xmark');
    
  } else {
    audio.pause();
    icon.classList.remove('fa-solid fa-volume-xmark');
    icon.classList.add('fa-solid fa-volume-high');
  }
  button.classList.add("fade");
});


 // Move Elevator Cabin Up and Down
  // Disable Respective Buttons 
  function move_img(str) {
    var step=420; // change this to different step value
    switch(str){
    case "down":
    showCabinElevator();
    var x= cabinElevator.offsetTop;
    x= x + step;
    cabinElevator.style.top= x + "px";
    disableGroundFloorElevatorButtons();
    outputDisplay.innerHTML = 'Going Down';
    hideGroundFloorElevator();
    showfirstFloorElevator();
    setTimeout( function() { hideCabinElevator(); }, 3000);
    setTimeout( function() { showGroundFloorElevator(); }, 3000);

    break;
    
    case "up":
    showElevator();
    var x=cabinElevator.offsetTop;
    x= x -step;
    cabinElevator.style.top= x + "px";
    disableFirstFloorElevatorButtons();
    outputDisplay.innerHTML = 'Going Up';
    hidefirstFlooElevator();
    break;
    
    }
  }

  // Hide Cabin Elevator
  function hideCabinElevator() {
  cabinElevator.style.visibility = "hidden";
  }

  // Show Cabin Elevator
  function showCabinElevator() {
  cabinElevator.style.visibility = "visible";
  }

  // Default Elevator State is Doors Closed
  function defaultElevatorState(){
    hideCabinElevator();
  }

  // Hide Ground Floor Elevator
function hideGroundFloorElevator(){
  groundFloorElevator.style.visibility = "hidden";
}

// Show Ground Floor Elevator
function showGroundFloorElevator(){
  groundFloorElevator.style.visibility = "visible";
}

  // Hide First Floor Elevator
  function hidefirstFlooElevator(){
    firstFloorElevator.style.visibility = "hidden";
  }

  // Show First Floor Elevator
  function showfirstFlooElevator(){
    firstFloorElevator.style.visibility = "visible";
  }


// Prevent Elevator From Passing Set Limits
function disableFirstFloorElevatorButtons(){
  theGroundFloorElevatorUpButton.classList.add("disabled");
  theGroundFloorElevatorDownButton.classList.remove("disabled");
}

// Prevent Elevator From Passing Set Limits
function disableGroundFloorElevatorButtons(){
  theGroundFloorElevatorDownButton.classList.add("disabled");
  theGroundFloorElevatorUpButton.classList.remove("disabled");
}

//setTimeout( function() { hideElevator(); }, 3000);
//groundFloorElevator.style.visibility = "visible";
