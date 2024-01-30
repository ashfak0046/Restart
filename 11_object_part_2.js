// // const tinderUser = new Object();

// const tinderUser = {};
// tinderUser.name = "Mahi"
// tinderUser.email = "mahi@gmail.com";
// tinderUser.isLoggedIn = true;

// console.log(tinderUser);

// const regularUser = {
//     email:"mahi@gmail.com",
//     fullName:{
//         userFullName:{
//             firstName:"Ashfak Mahbub",
//             lastName:"Mahi"
//         }
//     }
// }
// console.log(regularUser.fullName?.userFullName.firstName);

/**
 * ?Object.assign()
 *
 */
// const target = { a: 1, bee: 2, foo: 4, email: "mahi@gmail.com" };
// const source = { bee: 3, foo: 5, d: 5, email: "lorem@gmail.com" };
// const source2 = { fee: 4, bee: 5, foo: 7, email: "ashfak@gmail.com" };

// const obj3 = Object.assign(target, source, source2); //{} after adding the  bracket it merge the objects into one new
// console.log(target);
// console.log(target === obj3);

// const obj1 = { a: 0, b: { c: 0 } };
// const obj2 = Object.assign({},obj1);
// // console.log(obj1);
// // console.log(obj2);

// obj1.a = 1;
// console.log(obj1);
// console.log(obj2);

// obj2.a = 2;
// console.log(obj1);
// console.log(obj2);
// obj2.b.c = 4;
// console.log(obj1);
// console.log(obj2);
// const user = [
//     {
//         id:1,
//         email:"user@example.com",
//     },

//     {
//         id:1,
//         email:"user@example.com",
//     },

//     {
//         id:1,
//         email:"user@example.com",
//     },

//     {
//         id:1,
//         email:"user@example.com",
//     }
// ]
// console.log(user[1].id);
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// const UserData = {
//     name:"Ashfak",
//     age:25
// }

// Object.freeze(UserData);

// UserData.email = "user@example.com";

// console.log(UserData.email);

// console.log(Object.isFrozen(UserData));

/**
 * ? Object Destructing
 */

const userInfo = {
    name:"Ashfak",
    id:(Math.floor((Math.random() * 10000) + 1)),
    userInstructor:"Mahbub"

}
console.log(userInfo);

const {id, userInstructor:Instructor} = userInfo;

console.log(id,Instructor);
