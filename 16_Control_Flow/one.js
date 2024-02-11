// const isUserLoggedIn = true;
// const temperature = 41;

// if(temperature === 40){
//     console.log('Temperature is less than 50')
// }
// else{
//     console.log("Temperature is greater than 40");
// }

//? <,>,<=,>=,==,!=,===, !== 

// const score = 200;

// if(score > 100){
//     const power = "fly";
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

const balance = 1000;

if(balance > 500) console.log("Test"), console.log("Test 2") //* Implicit scope. Also avoid writing this type of code

if(balance < 500){
    console.log("less than 500");
}
else if(balance < 700){
    console.log("less than 700");
}
else{
    console.log("It might be getter than 700")
}

const isUserLoggedIn =  true;
const debitCard =  true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(isUserLoggedIn && debitCard){
    console.log("Allow to buy course");

}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged");
}