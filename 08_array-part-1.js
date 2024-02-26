const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers['length']);

// numbers.push(11);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.unshift(0);
// console.log(numbers);
// numbers.shift();
// console.log(numbers);

// const newArray = numbers.join();
// console.log(newArray);

console.log("Original array: " + numbers);
const newArray = numbers.slice(1,3);
console.log(newArray);
console.log("After slice: " + numbers);

const newArray2 = numbers.splice(1,3);
console.log(newArray2);
console.log("After splice: " + numbers);
