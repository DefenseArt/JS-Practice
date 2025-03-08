const scissors = document.getElementById("scissors"); 
const rock = document.getElementById("rock"); 
const paper = document.getElementById("paper");
const text = document.getElementById("text");
const win = document.getElementById("win");
const reset = document.getElementById("reset");

let winCount = 0, loseCount = 0, drawCount = 0;

function randomnum() {
    const randomnumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomnumber);
    return randomnumber;
}

//가위
scissors.addEventListener("click", () => {
    const numbers = randomnum();

    if(numbers === 3) {
        text.innerText = "승리";
        winCount++;
        win.innerText = `승리 : ${winCount}`;

    }     
    else if(numbers === 2)
        text.innerText = "패배";
    else
        text.innerText = "무승부";
});

//바위
rock.addEventListener("click", () => {
    const numbers = randomnum();

    if(numbers === 1) {
        text.innerText = "승리";
        winCount++;
        win.innerText = `승리 : ${winCount}`;
      }
    else if(numbers === 3)
        text.innerText = "패배";
    else
        text.innerText = "무승부";
});

//보
paper.addEventListener("click", () => {
    const numbers = randomnum();

    if(numbers === 2) {
        text.innerText = "승리";
        winCount++;
        win.innerText = `승리 : ${winCount}`;
      }
    else if(numbers === 1)
        text.innerText = "패배";
    else
        text.innerText = "무승부";
}); 

reset.addEventListener("click", () => {
  winCount = 0;
  win.innerText = `승리 : ${winCount}`;
})
