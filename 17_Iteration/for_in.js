const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "Ruby",
};

for (const key in myObject) {
//   console.log(`${key} of ${myObject[key]}`);
}

const supply = ["rice", "oil", "water", "medicine"];

for (const key in supply) {
   console.log(`Supply need in:${supply[key]}`);
}