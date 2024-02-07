// (function imidiate(){
//     console.log("Connected");
// })();

// ( running = () => {
// console.log(`first connection ${this}`);
// })();


// declareName = (name) => {
//     console.log("Lorem");
// }
// console.log(declareName);

const makeWithWithdraw = (balance) =>
( (copyBalance) => {
    let balance = copyBalance;
    const doBadThings = () => {
        console.log("I will do bad things with your money");
    };
    doBadThings();
    return {
        withdraw(amount){
            if(balance >= amount){
                balance -= amount;
                return balance;
            }
            return "Insufficient funds";
        }
    }
})(balance)

// const firstAccount = makeWithWithdraw(30);
const firstAccount = makeWithWithdraw(50);
console.log(firstAccount.withdraw(30));
// console.log(firstAccount.doBadThings);