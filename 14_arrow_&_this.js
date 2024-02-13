// const user ={
//     username:"Ashfak",
//     website: "youtube.com",
//     WelcomeMessage: function(){
//         console.log(`${this.username}, welcome to ${this.website} `);
//         console.log(this);
//     }

// }

// user.WelcomeMessage();
// user.username = "Mahi";
// user.WelcomeMessage();
// console.log(this);

// function one(){
//      username = "Mahi";
//     console.log(this.username)
// }
// one();
// function one(){
//    let username = "Mahi";
//    console.log(this.username)
// }
// one();

// const obj ={
//     name:"obj",
//     getThis(){
//         return this
//     }
// }

// const obj2 = {name:"obj2"};
// obj2.getThis = obj.getThis;
// console.log(obj2.getThis());

//* arrow function
const chai = () => {
     let username = "Mahbub";
    console.log(this);
}
chai();

// const summation = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(summation(4, 5));

// const addOn = (num1, num2) => num1 + num2;

// addOn();

// const result = (num1, num2) => (num1 + num2);

// result();

// const result2 = (num1, num2) => ({username:"Mahi"});

// console.log(result2(4,2));
// let username = "Mahi"
// const scope = () =>  console.log(username);

// scope();