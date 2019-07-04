
/*
const coffeeOrder = (size, typeOfDrink) => {
    console.log(`preparing ${size} coffee ${typeOfDrink}`);
}

coffeeOrder("large", "black");
coffeeOrder("small", "white")
*/

/*
//Activity1
let orderCount = 1

const takeOrder = (topping1, topping2, topping3) => {
    console.log(`Pizza with ${topping1}, ${topping2} and ${topping3}`);
    orderCount++;
}
takeOrder("pineapple", "ham", "cheese")
console.log(orderCount)
*/


//Activity 2
let userPin = 1234;
let accountBalance = 40000;
const cashWithdrawal = (enteredPin, requestedBalance) => {
    if (enteredPin === userPin) {
        console.log ("this Pin is valid");
        if (accountBalance >= requestedBalance)
            console.log ("your cash will be dispensed")
        else 
            console.log("you have insufficient funds in your account")
    } else
        console.log("this Pin is not valid");
}
   
   cashWithdrawal(1234, 300);
   cashWithdrawal(30, 50449921);
   cashWithdrawal(200, 50447921);
