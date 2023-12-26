let countdownTime = 1000;

const timerCount = document.getElementById('timer');

const updateTime = () => {
    let min = Math.floor(countdownTime / 60);
    let sec = Math.floor(countdownTime % 60);
    console.log(sec);
    let mS = min < 10 ? '0' : '';
    let sS = sec < 10 ? '0' : '';
    timerCount.innerText = `${(mS)}${min} : ${sS}${sec}`;
}

const decayTimer = () => {
countdownTime -= 1;
updateTime();
}


let nInterId;
const startTimer = () => {
    nInterId = setInterval(decayTimer, 1000);
}

let isPaused = false;

const pauseBtn = document.getElementById('pauseButton');
const pauseTimer = () => {
    if (!isPaused) {
        clearInterval(nInterId);
        isPaused = true;
        pauseBtn.innerText = 'Unpause'
    } else {
        nInterId = setInterval(decayTimer, 1000);
        isPaused = false;
        pauseBtn.innerText = 'Pause'
    }
}

startTimer();

const inputField = document.getElementById('bgInput');
const imageInput = inputField.value;
const page = document.querySelector('body');
const setImage = () => {
    console.log(imageInput);
    page.style.backgroundImage = `url(${imageInput})`;
    page.style.backgroundColor = 'transparent';
}