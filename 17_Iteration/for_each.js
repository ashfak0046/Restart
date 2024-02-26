const products = ["CMS", "LMS", "Static", "AI"];

// products.forEach(function (product, index) {
//         console.log(`Product name: ${product} & index: ${index}`);
// })

const priceOfProduct = [
    {name:"CMS", price:"1700USD"},
    {name:"Static", price:"1200USD"},
    {name:"LMS", price:"1900USD"},
    {name:"Ecommerce", price:"2000USD"}
]

const planDetails = {
    name:"CMS",
    price:"1700USD",
    functionality:"Content Management"
}

const str  = "Ashfak Mahbub Mahi"
priceOfProduct.forEach((product) => {
    if(product.name === "LMS"){
        return `price: ${product.price}` //! return works as continue if we use it in the foreach method
    }
    console.log(`product: ${product.name}`)
})

// planDetails.forEach((value) =>{
//     console.log(`Plan details is: ${value}`)
// })

// str.forEach((value) => {
//     console.log(value)
// })

const Shopping = ["Car","Bike","House","Money"];
const copyShopping = [];

function copyArray (items){
    copyShopping.push(items);
}

Shopping.forEach(copyArray);

console.log(copyShopping);