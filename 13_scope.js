// var a = 10;
// let b = 20; // *global scope
// let c = 30;

// if(true){
//     let b = 50; // ?block scope
//     let d = 100;
//     console.log(a); 
//     console.log(b);
//     console.log(c);
// }

// // console.log(d)

var x = 40;

function createFunction1(){
    const x = 30;
    function nestedFunction (){
        console.log(x)
    }
    nestedFunction();
}

createFunction1();