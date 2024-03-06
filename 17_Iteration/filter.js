const pricingOfProduct = [
  {
    name: "CMS",
    price: 200,
  },
  {
    name: "LMS",
    price: 300,
  },
  {
    name: "E-commerce",
    price: 500,
  },
  {
    name: "static",
    price: 150,
  },
];

const lessPrice = pricingOfProduct.filter((product) => {
  return product.price >= 150 && product.name === "static";
});
console.log(lessPrice);




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

// complexArray.map();
