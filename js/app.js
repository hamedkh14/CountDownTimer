let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;
const inputs = document.querySelectorAll("input");
const daysTime = document.getElementById("days");
const hoursTime = document.getElementById("hours");
const minutesTime = document.getElementById("minutes");
const secondsTime = document.getElementById("seconds");
const btnStart = document.getElementById("start");
const btnPause = document.getElementById("pause");
const btnReset = document.getElementById("reset");

btnStart.addEventListener("click", timerStart);
btnPause.addEventListener("click", timerPause);
btnReset.addEventListener("click", reset);

inputs.forEach((input) => {
  input.addEventListener("change", function () {
    if (input.name == "days") {
      days = input.value;
    } else if (input.name == "hours") {
      hours = input.value;
    } else if (input.name == "minutes") {
      minutes = input.value;
    } else {
      seconds = input.value;
    }
    TimeScreenchange();
  });
});

function timerStart() {
  timer = setInterval(() => {
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(timer);
      return;
    }

    if (days > 0 && hours == 0 && minutes == 0 && seconds == 0) {
      days--;
      hours = 24;
      minutes = 59;
      seconds = 59;
    } else if (hours > 0 && minutes == 0 && seconds == 0) {
      hours--;
      minutes = 59;
      seconds = 59;
    } else if (minutes > 0 && seconds == 0) {
      minutes--;
      seconds = 59;
    } else if (seconds > 0) {
      seconds--;
    } else {
      seconds = 59;
    }

    TimeScreenchange();
  }, 1000);
}

function timerPause() {
  clearInterval(timer);
}

function reset() {
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  timerPause();
  TimeScreenchange();
}

function TimeScreenchange() {
  daysTime.textContent = days < 10 ? "0" + days : days;
  hoursTime.textContent = hours < 10 ? "0" + hours : hours;
  minutesTime.textContent = minutes < 10 ? "0" + minutes : minutes;
  secondsTime.textContent = seconds < 10 ? "0" + seconds : seconds;
}
