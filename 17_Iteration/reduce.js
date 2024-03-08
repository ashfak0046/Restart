const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myTotal = myNums.reduce(function (acc, currentValue) {
    console.log(`Accumulator value: ${acc}, Current Value: ${currentValue}`);
  return acc + currentValue;
}, 0);

console.log(myTotal);

const shoppingCart = [
    {
        course_name: "Javascript",
        price: 5000
    },
    {
        course_name: "Javascript",
        price: 5000
    },
    {
        course_name: "Javascript",
        price: 5000
    },
    {
        course_name: "Javascript",
        price: 5000
    }
]

const totalPrice = shoppingCart.reduce((acc,curr) => acc + curr.price,0)
console.log(totalPrice);