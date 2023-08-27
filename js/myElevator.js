const button = document.querySelector("#button");
const icon = document.querySelector("#button > i");
const audio = document.querySelector("audio");

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