 
//  OBJECTS IN JAVASCRIPT, these are used to store multiple values in a single variable. They are also used to represent real-world entities and their properties. Objects are created using curly braces {} and consist of key-value pairs. and the key is also called a property and the value can be of any data type, including other objects and functions. Objects can also have methods, which are functions that are associated with the object and can be used to perform actions on the object's properties. objest can be created using object literals, constructor functions, or the Object.create() method. Objects are a fundamental part of JavaScript and are used extensively in web development to create dynamic and interactive web pages
// obj contain key value pair and the key is also called a property and the value can be of any data type, including other objects and functions. Objects can also have methods, which are functions that are associated with the object and can be used to perform actions on the object's properties. Objects can be created using object literals, constructor functions, or the Object.create() method.
// the key are  by defalt string but the value can be of any data type, including other objects and functions. Objects can also have methods, which are functions that are associated with the object and can be used to perform actions on the object's properties. Objects can be created using object literals, constructor functions, or the Object.create() method. Objects are a fundamental part of JavaScript and are used extensively in web development to create dynamic and interactive web pages.

let mySym = Symbol("key1")

 let myObject = {
    name: "Bilal",
    [mySym]: "This is a symbol key",
    age: 23,
    city: "Karachi",
    hobbies: ["cricket", "football", "coding"],
    isStudent: true,
    email: "bilal@example.com"
 }
//  console.log(myObject);
    console.log(myObject.name);
    console.log(myObject["age"]);
    console.log(myObject[mySym]);
 

    // change the value of key
    myObject.city = "Lahore";
    console.log(myObject.city);

    // if we want to dont change any more in Object we can use Object.freeze() method, that will make the object immutable and we can't change any value of the object.

    
    myObject.email = "bilal.updated@example.com";
    console.log(myObject.email); 
    Object.freeze(myObject);
    myObject.email = "bilal.frozen@example.com";
    console.log(myObject.email); 
    console.log(myObject);