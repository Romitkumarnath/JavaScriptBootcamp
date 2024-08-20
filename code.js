let secretNumber = Math.floor((Math.random() * 100) + 1);
let maxTries = 7;
let tries = 0;
let finished = false;

while (!finished) {
    let response = prompt(`Guess a number between 1 and 100, Try #${(tries + 1)}:`, 'number');
    if (response == null) { // cancel
        break;
    }
    let guess = parseInt(response);

    if (isNaN(guess)) {
        alert("You need to enter a number");
    } else {
        tries++;
        if (guess === secretNumber) {
            alert("Congratulations you got it");
            finished = true;
        } else if (tries === maxTries) {
            alert(`Sorry, you've run out of tries. The secret number was ${secretNumber}.`);
            finished = true;
        } else if (guess < secretNumber) {
            alert("Too low. Try again.");
        } else if (guess > secretNumber) {
            alert("Too high. Try again.");
        }
    }
}

