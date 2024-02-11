const userEmail  = [];

if(userEmail){
    console.log("Email found");
}
else{
    console.log("Enter your email address");
}

// * Falsy value -> false, 0, -0, BigInt On, "", null, undefined, NaN
// ? Truthy value -> "0", 'false', " ", [],{}, function(){}, 

const emptyObj = {};

if(Object.keys(emptyObj).length ===  0){
    console.log("Empty object")
}