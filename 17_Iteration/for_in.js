const myObject = {
    js : "javascript",
    cpp : "C++",
    rb: "Ruby"
}

for (const key in myObject) {
    console.log(`${key} of ${myObject[key]}`)
}