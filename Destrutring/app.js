
// destructuring in Javascript is a convenient way of extracting multiple values from data stored in objects and arrays. It allows you to unpack values from arrays or properties from objects into distinct variables.

// 1. Object Destructuring
// Object destructuring allows you to extract properties from an object and assign them to variables in a single statement. The syntax uses curly braces {} and the variable names must match the property names of the object.
// syntax:
// const { property1, property2 } = objectName; 

 


let person = {
    firstName: " Nawaz",
    lastName: "Sharif",

}
let { firstName, lastName , age = 20} = person;
console.log(firstName);
console.log(age); // this will give an error because age is not defined in the person object.


// let fName = "bilal"
// let lName = "ghafoor"

// let person2 = {
//     fName,
//     lName
// }
// console.log(person2);

// let arr = [1, 2, 3, 4, 5];
// let [a,b,c,d,e, f=6] = arr;
// let [ a, b, c, ...rest ] = arr;
// console.log(a,b,c,rest);
// console.log(a);
// console.log(f); // this will give an error because f is not defined in the arr array.

// let [x, y] =[10, 20];
// console.log(x);
// console.log(y);

// [10, x , ...rest] = [10, 20, 30, 40, 50];
// console.log(x);
// console.log(rest);

let obj = {a: 1, b: 2, c: 3};
let {a, ...restObj} = obj;
// console.log(a);
// console.log(restObj);

let obj2 = {x: 10, y: 20, z: 30};
let {x,y,z} = obj2;
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(obj2);

// SPREAD OPERATOR
// The spread operator is a syntax that allows an iterable such as an array or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected. The spread operator is denoted by three dots (...).

let arr1 = [1, 2, 3];
let obj3 = {...arr1};
console.log(obj3);  

function sum(x, y, z) {
    return x + y + z;
}
console.log(sum(...arr1)); 

let obj4 = {
    name: "Bilal",
    age: 23,
    city: "Karachi" 
}
console.log({...obj4, name : "Ali"});