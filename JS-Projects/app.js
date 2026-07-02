//  JS programm to find the largest of three numbers
// OUR AGENDA    ...... Math mathod and user defined method
// Math.max() method return the argest number amoung the provided numbers
// user defined method is a function that we create to perform a specific task.
// let a = prompt("Enter the first number:");
// let b = prompt("Enter the second number:");
// let c = prompt("Enter the third number:");
// let x = Math.max(a, b, c);
// console.log("The largest number is: " + x);

// Now using defined function to find the largest of three numbers

// function checkNumber(p, q , r){
//     if(p >= q && p >= r){
//         return p;
//     } else if(q>= p && q >= r){
//         return q;
//     } else{
//         return r;
//     }
// }
// let a = prompt("Enter the first number:");
// let b = prompt("Enter the second number:");
// let c = prompt("Enter the third number:");
// let x = checkNumber(a,b,c)
// console.log(`${a}, ${b}, ${c}, the lagest amoung is ${x}`)



// Find factoriAL

// let number = prompt("Enter a number to find its factorial:");
// let factorial = 1;
// if(number == 0){
//     console.log(`The factorial of ${number} is 1`);
    
// }else if(number < 0){
//     console.log("Factorial is not defined for negative numbers.");
// }
// else if(number > 0){
//     for(let i= 1; i <=number ; i++){
//         factorial = factorial * i;
//     console.log(`The factorial of ${number} is ${factorial}`);
// }}

// Find factoriAL using recursion: the factorical of a number n is the product of all positive integers less than or equal to n. It can be defined recursively as follows:


// Exercise 1: Calculate total sales amount
//  Problem:
//  You are working for an online store. Your task is to write a JavaScript code snippet that calculates the total sales amount for a given set of sales transactions.


// 

// const orders = [
//     { item: "Espresso", quantity: 2, price: 3.5 },
//     { item: "Latte", quantity: 3, price: 4.0 },
//     { item: "Cappuccino", quantity: 1, price: 4.5 }
// ];
// function generateReceipt(orders) {
//     let grandTotal = 0;
//     console.log("Receipt:");
//     console.log("----------------------");
//     for (let i = 0; i < orders.length; i++) {
//         const itemTotal = orders[i].quantity * orders[i].price;
//         grandTotal += itemTotal;
//         console.log(`${orders[i].item} - Quantity: ${orders[i].quantity}, Price: $${orders[i].price}, Total: $${itemTotal}`);
//     }
//     console.log("----------------------");
//     console.log(`Grand Total: $${grandTotal}`);
// }
// generateReceipt(orders);



// max of two number

let arr = [1,2,3,4,5,6]

function maxProduct(arr){
    let sortArr = arr.sort((a, b) => b- a)
    return  sortArr[0] * sortArr[1]
}

let result = maxProduct(arr)
console.log(result)

// merge two obj
let obj1 = {
    name: "Bilal Ghafoor",
    age: "23"
}

let obj2 = {
    city: "Mingora",
    phone : 12345
}

let obj3 = {...obj1 , ...obj2}
console.log(obj3)