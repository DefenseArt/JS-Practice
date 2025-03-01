const timeInput = document.getElementById("timeInput");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const timerDisplay = document.getElementById("timerDisplay");

let timer = parseInt(timeInput.value);
let timeLeft = 0;


function startTimer() {
    timeLeft = parseInt(timeInput.value);
    if (isNaN(timeLeft) || timeLeft <= 0) {
        alert("1 이상의 숫자를 입력하세요!");
        return;
    }

    clearInterval(timer);

    timer = setInterval(() => {
        if (timeLeft > 0) {
            timerDisplay.innerText = `남은 시간: ${timeLeft}초`;
            timeLeft--; 
        } else {
            clearInterval(timer);
            timerDisplay.innerText = "타이머 종료!";
        }
    }, 1000); 
}

function stopTimer() {
    clearInterval(timer);
    timerDisplay.innerText = "타이머 정지됨";
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
