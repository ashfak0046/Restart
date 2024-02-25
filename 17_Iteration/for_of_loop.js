// const myArray = ["a", "b", "c", "d", "e"];

// for (const value of myArray) {
//     // console.log(`value: ${value}`);
//     if(value === "c"){
//     console.log(`Value of the array ${value}`);
//     // break;
//     continue
//     }
//     console.log(`value: ${value}`);
// }

// const strName = "Ashfak Mahbub Mahi";

// for( const word of strName ) {
//     console.log(`Words: ${word}`);
// }

// const superHeros = ["Ironman", "Thor", "Hulk", "Loki", "Spiderman"];

// for (const [key, name] of superHeros.entries()) {
//* When we have to work with the array index along with the value using for of method it mandatory to use entries() method
// console.log(`Superheros: ${name}`);
//   if (key === 2) {
//     console.log(`SuperHero name: ${name}`);
//   }
// }

// const map = new Map();
// map.set("name", "Ashfak");
// map.set("age", "20");
// map.set("email", "mahi@gmail.com");

// for (const [key, info] of map) {
//   console.log(`User info: ${key} : ${info}`);
// }

const obj = {
  name: "Superhero",
  power: "Everything",
};

for (const [value, key] of Object.values(obj).entries()) {
  console.log(`Superhero value: ${value}` + `: ${key}`);
}

// const numbers = 13453465765645;

// for (const value of numbers) {
//  console.log(`value: ${value}`);
// }

const priceOfGoods = {
  product_1: {
    name: "Mobile",
    price: 30000,
  },
  product_2: {
    name: "Laptop",
    price: 60000,
  },
  product_3: {
    name: "Mobile",
    price: 70000,
  }
};

for (const  [key, item] of Object.entries(priceOfGoods)) {
    console.log(`${key} priceOf:${item.name}`)
}