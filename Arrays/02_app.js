let heros = ["Ali", "Hassan", "Ahmed", "Omar"];
let character = ["Naveed ", "Shahbaz ", "Sajid ", "Shahid "];

// heros.push("Shahid Afridi");
// console.log(heros);

// console.log(character);
// console.log("merge the hero and char cater")
// heros.push(character);
// console.log(heros);
// console.log(heros[1][0]);



// now for combine array we ca used CONCAT method , that can join two or more arrays and return a new array without changing the existing arrays.

let allHeros = heros.concat(character);
// console.log(heros.concat(character));
// console.log(allHeros);

// another way to merge arrays is by using the spread operator (...), which allows us to expand an array into individual elements.

// let allHeros2= [...heros, ...character];
// console.log(allHeros2);


// FLAT method is used to flatten nested arrays into a single level array.many arrys in one array can be flatten by using this method.and give us total array in one array.w/o array other array in array.

let nestedArray =   [1,2,3, [4,5,6], 7 , [ 8,9, [10, 11, 12], 13, 14], 15];
let new_flat_array = nestedArray.flat(Infinity); 
console.log(new_flat_array);


let score1 = 12
let score2 = 13
let score3 = 14
console.log(Array.of(score1, score2, score3))