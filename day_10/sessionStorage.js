// set item(Key, Value)
sessionStorage.setItem("user1", "Shefaul");
sessionStorage.setItem("user2", "Rakibul");
const user = { id: "101", name: "Rafsan" };
sessionStorage.setItem("user", JSON.stringify(user));

// get item(key)
const userName = sessionStorage.getItem("user1");

const userInfo = JSON.parse(sessionStorage.getItem("user"));

// print item
console.log(userName);
console.log(userInfo);

// remove item
sessionStorage.removeItem("user1");

// clear sessionStorage
sessionStorage.clear();
