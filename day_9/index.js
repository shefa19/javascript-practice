function highestScore(scores) {
  let highest = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highest) {
      highest = scores[i];
    }
  }
  return highest;
}

let scores = [21, 25, 28, 6, 13, 5];
console.log(highestScore(scores));
