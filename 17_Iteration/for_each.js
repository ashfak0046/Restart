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

priceOfProduct.forEach((product) => {
    if(product.name === "LMS"){
        return `price: ${product.price}` //! return works as continue if we use it in the foreach method
    }
    console.log(`product: ${product.name}`)
})