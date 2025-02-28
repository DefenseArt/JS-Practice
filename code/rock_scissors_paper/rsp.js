const scissors = document.getElementById("scissors"); 
const rock = document.getElementById("rock"); 
const paper = document.getElementById("paper");
const text = document.getElementById("text");

function randomnum() {
    const randomnumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomnumber);
    return randomnumber;
}

//가위
scissors.addEventListener("click", () => {
    const numbers = randomnum();

    if(numbers === 3) 
        text.innerText = "승리";
    else if(numbers === 2)
        text.innerText = "패배";
    else
        text.innerText = "무승부";
});

//바위
rock.addEventListener("click", () => {
    const numbers = randomnum();

    if(numbers === 1)
        text.innerText = "승리";
    else if(numbers === 3)
        text.innerText = "패배";
    else
        text.innerText = "무승부";
});

//보
paper.addEventListener("click", () => {
    const numbers = randomnum();

    if(numbers === 2)
        text.innerText = "승리";
    else if(numbers === 1)
        text.innerText = "패배";
    else
        text.innerText = "무승부";
}); 
