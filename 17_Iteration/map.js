const superHeros = ["Batman", "Superman", "Aquaman", "Wonderwoman"];

// function valueSuperHero(superHero){
//   return (`Value of super hero: ${superHero}`);
// }
// const duplicateSupportHero = superHeros.map(valueSuperHero);

// console.log(duplicateSupportHero);

// const complexArray = [
//   {
//     id: 1,
//     name: "John",
//     age: 30,
//     hobbies: ["Reading", "Hiking"],
//     address: {
//       street: "123 Main St",
//       city: "Cityville",
//       country: "Countryland",
//     },
//     friends: [
//       {
//         name: "Alice",
//         age: 32,
//         occupation: "Engineer",
//       },
//       {
//         name: "Bob",
//         age: 29,
//         occupation: "Artist",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Jane",
//     age: 25,
//     hobbies: ["Painting", "Traveling"],
//     address: {
//       street: "456 Elm St",
//       city: "Townsville",
//       country: "Countryland",
//     },
//     friends: [
//       {
//         name: "David",
//         age: 27,
//         occupation: "Doctor",
//       },
//       {
//         name: "Eva",
//         age: 24,
//         occupation: "Teacher",
//       },
//     ],
//   },
// ];

// complexArray.map((values) => {
//   // console.log(values); //* returning object under the array
//   Object.values(values).map((items) => {
//     // console.log(items); //? returning values under the object
//     if (Array.isArray(items)) { //! checking inner array of the object
//       items.map((arr_value) => { //* returning values of the inner array
//         if (typeof arr_value === "object") { //? checking object of the inner array
//           Object.values(arr_value).map((inner_obj) => { //! iterating inner object of the inner array
//             console.log(inner_obj); //* printing values of the inner object
//           });
//         } else {
//           console.log(arr_value); //! printing values of the inner array
//         }
//       });
//     } else if (typeof items === "object") { //* checking object under the object
//       // console.log(items);
//       Object.values(items).map((obj_value) => {
//         console.log(obj_value); //? printing object values by iterating them
//       });
//     } else {
//       console.log(items); //? printing values under the main object which is under the main array
//     }
//   });
// });

// function isObject(check_obj) {
//   return (
//     typeof check_obj === "object" &&
//     check_obj !== null &&
//     !Array.isArray(check_obj)
//   );
// }

const nums = [1,2,3,4,5,6,7,8,9,10];

let sum = 0;
const Total = nums.map(num => {
  return sum = sum + num;
})

console.log(sum);

