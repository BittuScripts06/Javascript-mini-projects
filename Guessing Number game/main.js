; (function () {

    const userInput = document.querySelector(".user-input");
    const form = document.querySelector("form");
    const result = document.querySelector(".result");
    const submitBtn = document.querySelector(".submit-btn");
    const startBtn = document.querySelector(".start-btn");
    const allGuesses = document.querySelector(".all-guesses");


    let randomNumber = Math.floor(Math.random() * 100);
    let allGuessesArray = [];

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const userInputValue = parseInt(userInput.value);

        if (allGuessesArray.length >= 10) {
            result.innerText = `Game over:  your number was ${randomNumber}`;
            allGuesses.innerText = "you reached the maximum"
            startBtn.disabled = false;
            submitBtn.disabled = true;
            return;

        }


        if (isNaN(userInputValue)) {
            result.innerText = "please enter a valid number";
            return
        }


        if (userInputValue < randomNumber) {
            result.innerText = "Too Low!";
        }
        else if (userInputValue > randomNumber) {
            result.innerText = "Too High!";
        }
        else {
            result.innerText = "congrates!! you got it.";
            submitBtn.disabled = true;
            startBtn.disabled = false;
        }
        allGuessesArray.push(userInput.value);
        allGuesses.innerText = "your guesses:" + allGuessesArray.join(',');

        startBtn.addEventListener('click', () => {
            submitBtn.disabled = false;
            startBtn.disabled = true;
            userInput.value = "";
            result.innerText = '';
            allGuesses.innerText = '';
            allGuessesArray.length = 0;
            randomNumber = Math.floor(Math.random() * 100);
        })


        form.reset();
    })

})();
