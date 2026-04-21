// PROMISE is a to can a work with a request of user or server that can be complete or reject
//can do promise for task completon // easy way to replace callback hell to easier for developer ..... in promise we can passs a funtion in thses Funct pass 2 handler one is Resolve and the other is reject 
// PROMISE stat 1. pending  2 .fullfilled 3. rejected
//PROMISE IS AN JS OBJ

// let promise = new Promise((resolve, reject) => {
//     console.log("Promise is pending");
//     resolve("Success")
// })

//in general program promise can call by API  when request to it

// function getData(dataId, getNextData){
//     return new promise((resolved, rejected)=> {
//         setTimeout(() => {
//     console.log("Data received: " + dataId);
//     resolved("Data received: " + dataId + "successfully");
//     if(getNextData){
//         getNextData();
//     }
//     }, 2000)
//     })
// }

// getData(23435345)

// when promise ocer 2 methods has been called one is then and the other is catch when promise is resolve then then method is called and when promise is reject then catch method is called

// const promisThenCatch = () => {
//     return new Promise((resolve, reject) => {
//         console.log("i am a apromse ")
//         resolve(1234)
//         // reject("error00")
//     })
// }
// let promiseReult = promisThenCatch();

// promiseReult.then((res) => {
//     console.log("Congrate your promise request is full filled", res)
// })
// promiseReult.catch((err) => {
//     console.log("Sorry your promise request is not full filled", err)
// })
let hello = ( ) => {
    return new Promise(() => {
        console.log("its a promise!")
    })
}
hello();