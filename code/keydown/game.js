const start = document.getElementById("start");
const target = document.getElementById("target");
const score = document.getElementById("score");

let randomUppercase = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
let scor = 0;

let timer; 

function startTimer() {
    clearTimeout(timer); 
    timer = setTimeout(() => {
        console.log("시간 초과!"); 
    }, 3000); 
}


start.addEventListener("click", () => {
    randomUppercase = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    target.innerText = randomUppercase; 
    startTimer();
});

document.addEventListener("keydown", (event) => {
    console.log(`현재 표시된 글자: ${target.innerText}, 입력된 키: ${event.key}`);

    if (!target.innerText) return;  

    if(event.key.toUpperCase() === target.innerText) {
        clearTimeout(timer);
        
        scor++;
        score.innerText = `점수 : ${scor}`;

        randomUppercase = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        target.innerText = randomUppercase; 

        startTimer();
    }
});
