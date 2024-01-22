// const score = 100;
// const balance = new Number(100);
// console.log(score);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber = 26.4385494;
// console.log(otherNumber.toPrecision(5));

// const hundreds = 100000;
// console.log(hundreds.toLocaleString("zh-Hans-CN-u-nu-hanidec"));

// Math

const number = -4;
console.log(Math.abs(number));

function difference(a, b) {
  return Math.abs(a - b);
}
const answer = difference(5, 9);
console.log(answer);

console.log(Math.floor(4.67));
console.log(Math.ceil(6.4));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10 + 1));

const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * (max- min +1)) + min));
console.log(window.crypto.getRandomValues());

