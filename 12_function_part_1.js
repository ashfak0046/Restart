// function sayMyName (){
//     console.log("My name is Ashfak Mahbub Mahi");
// }

// sayMyName;
// console.log(sayMyName);// When we call just the function name it behaves like a reference
// sayMyName();// When we call just the function using () it executes the function

// function addTwoNumbers(num1, num2){
//     return num1 + num2;
// }

// const result = addTwoNumbers(1, 2);
// console.log(result)
// addTwoNumbers(2,3);
// addTwoNumbers("2",4);
// addTwoNumbers(3,"5");
// addTwoNumbers(5, undefined);
// addTwoNumbers(12,null);
// addTwoNumbers(3);

function loginUser(username = "Mahi"){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUser())