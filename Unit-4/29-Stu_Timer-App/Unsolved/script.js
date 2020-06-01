var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;



function startTimer() {
  // Write code to start the timer here
  totalSeconds = workMinutesInput.value;

  var countDown = setInterval(function () {
    totalSeconds--;
    minutesDisplay.innerHTML = totalSeconds;

    if (totalSeconds >= 0) {
      clearInterval(countDown);
      alert ("Time for a break!!!");
    };
  }, 1000);
};

function stopTimer() {
  minutesDisplay.innerHTML = workMinutesInput.value;

};

function pauseTimer(){
  
};


//Button Actions
playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", stopTimer); 
stopButton.addEventListener("click", stopTimer);


//timer -> 1 second -> 1000
// timer in start timer 
// seconds -> increment in timer
// update timer 
//when timer done alert user

