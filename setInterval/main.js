const startBtn = document.querySelector('#btn1');
const stoptBtn = document.querySelector('#btn2');
let intervalId;

startBtn.addEventListener("click", function () {
    if (!intervalId) {
        intervalId = setInterval(function () {
            console.log("hello Javascript");
        }, 1000)
    }
})

stoptBtn.addEventListener("click", function () {
    clearInterval(intervalId);
    intervalId = null;
})