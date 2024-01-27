const marvel_heros = ["Iron Man","Thor","Captain America","Ant Man"];
const dc_heros = ["Super Man","Batman","Aqua Man","Wonder Women"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// const crossUniverse = marvel_heros.concat(dc_heros);


const crossUniverse = [...marvel_heros, ...dc_heros];
console.log(crossUniverse);

const nestedArray = [1,2,3,4,[5,6,7],[8,[9,10,11]]];
const shatterdArray = [1,2,3," ",["a","","b"]];
console.log(shatterdArray.flat(Infinity));; 
const simplifiedArray = nestedArray.flat(Infinity);
console.log(simplifiedArray);

console.log(Array.isArray("Ashfak"));
console.log(Array.from("Ashfak"));
console.log(Array.from({name:"Ashfak"}));

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3));