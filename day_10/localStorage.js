// Set item(Key, value)
localStorage.setItem("userName", "Shefaul Islam");
localStorage.setItem("password", "12345678");
const subject = ["Software Engineering", "DBMS", "Math"];
localStorage.setItem("subject", JSON.stringify(subject));

//get item(Key)
const userName = localStorage.getItem("userName");
const userPassword = localStorage.getItem("password");
const userSubject = JSON.parse(localStorage.getItem("subject"));

console.log(userName, userPassword);
console.log(userSubject);

//remove item(Key)
localStorage.removeItem("userName");

//clear localStorage
localStorage.clear();
