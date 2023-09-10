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


document.getElementById("demo").innerHTML = 'Elevator Requested';

function myFunction() {
  document.getElementById("myDIV").style.position = "absolute";
  document.getElementById("demo").innerHTML = 'Going Up';
}

function myFunction2() {
  document.getElementById("myDIV2").style.position = "absolute";
  document.getElementById("demo").innerHTML = 'Going Up';
}

function myreverseFunction() {
  document.getElementById("myDIV").style.position = "relative";
  document.getElementById("demo").innerHTML = 'Going Down';
}

function myreverseFunction2() {
    document.getElementById("myDIV2").style.position = "relative";
    document.getElementById("demo").innerHTML = 'Going Down';
  }


  function move_img(str) {
    var step=420; // change this to different step value
    switch(str){
    case "down":
    showElevator();
    var x=document.getElementById('i1 ttf-steps').offsetTop;
    x= x + step;
    document.getElementById('i1 ttf-steps').style.top= x + "px";
    break;
    
    case "up":
    showElevator();
    var x=document.getElementById('i1 ttf-steps').offsetTop;
    x= x -step;
    document.getElementById('i1 ttf-steps').style.top= x + "px";
    break;
    }
  }

  function hideElevator() {
    document.getElementById("i1 ttf-steps").style.visibility = "hidden";
  }

  function showElevator() {
    document.getElementById("i1 ttf-steps").style.visibility = "visible";
  }

function defaultElevatorState(){
  hideElevator();
}

function groundFloor(){
  document.getElementById("groundFloorElevator").style.visibility = "hidden";
}