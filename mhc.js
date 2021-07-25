var timer;
var seconds = 0;

var beepShort = new Audio("./beep-01.mp3");
var beepLong = new Audio("./beepAfter10.mp3");
var bellRinging = new Audio("./bell-ringing-04.mp3");

var runShortDelayCounter = false;
var shortDelayCounter = 0;
var runLongDelayCounter = false;
var longDelayCounter = 0;

var shortDelay = 0;
var longDelay = 0;
var stopTime = 0;

function initializeVariables() {
    runShortDelayCounter = false;
    shortDelayCounter = 0;
    runLongDelayCounter = false;
    longDelayCounter = 0;

    shortDelay = 0;
    longDelay = 0;
    stopTime = 0;

    seconds = 0;
}


function startTimer() {
    runShortDelayCounter = true;
    
    shortDelay = document.getElementById("shortDelay").value;
    longDelay = document.getElementById("longDelay").value;
    stopTime = document.getElementById("stopTime").value;

    timer = setInterval(processTimer, 1000);
    beepShort.play();
}

function setDisplayTime(timeInSeconds) {
    var time = document.getElementById("time");
    time.innerText = timeInSeconds;
}

function processTimer() {
    seconds++;
    if (runShortDelayCounter) {
        shortDelayCounter++;
    }

    if (runLongDelayCounter) {
        longDelayCounter++
    }

    setDisplayTime(seconds);
    
    if (longDelayCounter == longDelay) {
        runShortDelayCounter = true;
        
        longDelayCounter = 0;
        runLongDelayCounter = false;
        
        beepShort.play();
    }

    
    if(shortDelayCounter == shortDelay) {
        
        shortDelayCounter = 0;
        runShortDelayCounter = false;

        runLongDelayCounter = true;
        
        beepLong.play();
    }

    if (seconds == stopTime) {
        bellRinging.play();
        stopTimer();
    }
}

function pauseTimer() {
    clearInterval(timer);
}

function stopTimer() {
    clearInterval(timer);
    initializeVariables();
    setDisplayTime(0);
}