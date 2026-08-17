//Task 5 - input a letter and check it is vowel or consonant using switch

var letter = prompt("Enter a letter: ");
letter = letter.toLowerCase();
var result = "";
switch (letter) {
  case "a":
  case "e":
  case "i":
  case "u":
    console.log("Vowel");
    break;
  default:
    console.log("Consonant");
}
