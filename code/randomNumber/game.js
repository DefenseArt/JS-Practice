const start = document.getElementById("start");
const target = document.getElementById("target");
const score = document.getElementById("score");
const userInput = document.getElementById("userInput");
const result = document.getElementById("result");

let scor = 0;

let randomNumber;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    target.innerText = randomNumber;
    userInput.value = "";
    userInput.style.display = "none";

    setTimeout(() => {
        target.innerText = "숫자가 사라졌습니다!";
        userInput.style.display = "block";
    }, 3000); 

}

start.addEventListener("click", () => {
    startGame();
    start.style.display = "none";
});

userInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        let userAnswer = userInput.value;
        userInput.value = "";
        if(parseInt(userAnswer) === randomNumber) {
            result.innerText = "정답입니다.";

            setTimeout(() => {
                result.innerText = "";
            }, 500);

            scor++;
            score.innerText = `점수 : ${scor}`;
            startGame();
        }
        else{
            result.innerText = "오답입니다.";

            setTimeout(() => {
                result.innerText = "";
            }, 500);

            startGame();
        }
            
    }
});
