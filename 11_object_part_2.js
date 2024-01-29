// const tinderUser = new Object();

const tinderUser = {};
tinderUser.name = "Mahi"
tinderUser.email = "mahi@gmail.com";
tinderUser.isLoggedIn = true;

console.log(tinderUser);

const regularUser = {
    email:"mahi@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Ashfak Mahbub",
            lastName:"Mahi"   
        }
    }
}
console.log(regularUser.fullName?.userFullName.firstName);

const obj1 = {"a":1,"b":2};
const obj2 = {"c":3,"d":4};

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);
const user = [
    {
        id:1,
        email:"user@example.com",
    },

    {
        id:1,
        email:"user@example.com",
    },

    {
        id:1,
        email:"user@example.com",
    },

    {
        id:1,
        email:"user@example.com",
    }
]
console.log(user[1].id);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));