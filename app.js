let maximum = parseInt(prompt("Enter the maximum number!"));  //prompts user to enter the max number
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));  //If number is invalid, user is asked to enter a real number
}

const targetNum = Math.floor(Math.random() * maximum) + 1;  //generates our random number

let guess = prompt("Enter your first guess! (Type 'q' to quit)");
let attempts = 1; //user always starts with one first guess

while (parseInt(guess) !== targetNum) {  //while loop to determine if guess is too high or too low.  includes the ability to quit with 'q'
    if (guess === 'q') break;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt("Number is too high! Enter a new guess:");
        attempts++;
    } else if (guess < targetNum) {
        guess = prompt("Number is too low! Enter a new guess:");
        attempts++;
    } else {
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
    }
}

if (guess === 'q') {  //closes program
    console.log("Closing program")
} else {
    console.log("Winner! You guessed correctly")
    console.log(`You got it! It only took you ${attempts} guesses`) //prints out winner message along with the amount of guesses that it took to guess correctly.
}