const number  = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

increase.onclick = () => {
    const sum = parseInt(number.innerText, 10);
    number.innerText = sum + 1;
};

decrease.onclick = () => {
    const sum = parseInt(number.innerText, 10);
    number.innerText = sum - 1;
};

reset.onclick = () => {
    number.innerText = 0;
};
