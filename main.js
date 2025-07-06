const screen = document.getElementById('screen');
const startButton = document.getElementById('start-button');

let milliseconds = 0;
let intervalId
let isRunning = false;

const startTimer = () => {
    if (isRunning) return;
    isRunning = true;
    intervalId = setInterval(() => {milliseconds += 10;
        console.log(milliseconds)
    }, 10)
}

startButton.addEventListener('click', startTimer)

const pauseButton = document.getElementById('pause-button')

const pauseTimer = () => {
    clearInterval(intervalId)
    console.log(milliseconds)
    isRunning = false;
}

pauseButton.addEventListener('click', pauseTimer)

const resetButton = document.getElementById('reset-button')

const resetTimer = () => {
    milliseconds = 0;
    console.log(milliseconds)
}

resetButton.addEventListener('click', resetTimer)

const updateScreen = () => {
    let minutes = Math.floor(milliseconds / 60000);
    let seconds = Math.floor((milliseconds % 60000) / 1000);
    let ms = Math.floor((milliseconds % 1000) / 10)
    screen.innerText = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(ms).padStart(2, "0")}`
}

setInterval(updateScreen, 10)