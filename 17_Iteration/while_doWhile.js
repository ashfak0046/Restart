const superHeros = ["Batman", "Superman", "Flash"];

let index = 0;

// while (index < superHeros.length) {
//   console.log(`Super hero name is: ${superHeros[index]}`);
//   index += 1;
// }

do {
    console.log(`Super hero name is: ${superHeros[index]}`);
    index = index + 1;
} while (index < superHeros.length)