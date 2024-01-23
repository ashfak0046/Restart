let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

let myCreatedDate = new Date(2023,4,13);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.getTime()); 

let formattingDate = new Date("2024-01-23");
console.log(formattingDate.toDateString());
console.log(formattingDate.toLocaleDateString());

let myTimeStamp = Date.now();
console.log(Math.floor(myTimeStamp / 1000));

let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default',{
    weekday: 'long'
});