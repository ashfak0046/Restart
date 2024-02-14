// const userEmail = [];

// if (userEmail) {
//   console.log("Email found");
// } else {
//   console.log("Enter your email address");
// }

// * Falsy value -> false, 0, -0, BigInt On, "", null, undefined, NaN
// ? Truthy value -> "0", 'false', " ", [],{}, function(){},

// const emptyObj = {};

// if (Object.keys(emptyObj).length === 0) {
//   console.log("Empty object");
// }


//? Nullish Coalescing Operator -> ??: null & undefined

let value = undefined;
// value = value ?? null;
// value = null ?? "" ?? 3;
// value = null ?? {} ?? 3;
// value = null ?? undefined ?? 3;
// value = null ?? function(){} ?? 3;
// value = null ?? false ?? 3;
value = null ?? NaN ?? 3;
// value = null ?? 0 ?? 3;
console.log(value)

//! Terniary Operators: condition ? true : false

// const watchPrice = 400;

// watchPrice >= 300 ? console.log("Greater than 300") : console.log("Less than 300");
