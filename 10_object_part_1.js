//Singleton //Object.create

//Object literals

const key1 = Symbol("key25");

const jsUser = {
  name: "Ashfak",
  "full name": "Ashfak Mahbub Mahi",
  [key1]: "key35",
  age: 25,
  location: "Sylhet",
  email: "ashfak@gmail.com",
};

// console.log(jsUser);
// console.log(jsUser.name);
// console.log(jsUser["full name"]);

// jsUser.age = 26;
// console.log(jsUser)
// // Object.freeze(jsUser);
// jsUser.name = "Mahi";
// console.log(jsUser)

jsUser.greetings = function() {
    console.log("Hello JS User");

}

console.log(jsUser.greetings());

jsUser.greetings2 = function() {
    console.log(`Hello JS User, ${this["full name"]}`);
}
console.log(jsUser.greetings2());