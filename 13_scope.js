var a = 10;
let b = 20; // *global scope
let c = 30;

if(true){
    let b = 50; // ?block scope
    let d = 100;
    console.log(a); 
    console.log(b);
    console.log(c);
}

// console.log(d)