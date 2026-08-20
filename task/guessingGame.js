let numOfwon = 0;
let numOflost = 0;
for (let i = 0; i <= 5; i++) {
  let guessNumber = parseInt(prompt("Enter your guessing number: "));

  let randomNumber = Math.floor(Math.random() * 5) + 1;

  if (guessNumber == randomNumber) {
    console.log("You have won");
    numOfwon++;
  } else {
    console.log("You have lost. Random number was " + randomNumber);
    numOflost++;
  }
}

console.log("Total Number of Won = " + numOfwon);
console.log("Total Number of Lost = " + numOflost);
