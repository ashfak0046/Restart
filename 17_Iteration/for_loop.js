// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("Five Found");
//     }
//     console.log(element)
// }

// for (let i = 0; i < 10; i++) {
//     console.log(`Outer value: ${i}`);
//     for (let j = 0; j < 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
    
// }

// const superHeros = ["Flash", "Batman", "Superman", "Aquaman"];
// const superPower = ["Speed","Money","Strong", "Water Control"]

// for(let i =0; i < superHeros.length; i++){
//     const name = superHeros[i]
//     for(let j = 0; j < superPower.length; j++) {
//         const power = superPower[j]
//         console.log(`${name} has ${power} power`);
//     }
// }

const superHeros = ["Flash", "Batman", "Superman", "Aquaman"];
const superPower = ["Speed", "Money", "Strong", "Water Control"];

for (let i = 0; i < superHeros.length; i++) {
    const name = superHeros[i];
    const power = superPower[i]; // Use the same index for superPower array
    console.log(`${name} has ${power} power`);
}

