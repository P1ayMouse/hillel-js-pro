let time = 85;
const timerText = document.getElementById('timer');

setTime(time);

timer = setInterval(() => {
    time = time - 1;
    setTime(time);

    if (time <= 0) {
        clearInterval(timer);
    }
},1000);

function setTime(time) {
    timerText.innerText = "";
    let firstNumber = Math.floor(time/60);
    let formatedFirstNumber = firstNumber > 10 ? firstNumber : "0" + firstNumber;

    let secondNumber = time % 60;
    let formattedSecondNumber = secondNumber > 10 ? secondNumber : "0" + secondNumber;

    timerText.innerText = formatedFirstNumber + ":" + formattedSecondNumber;
}