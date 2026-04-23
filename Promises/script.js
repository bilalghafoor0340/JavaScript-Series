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

//Ascync fuvtion

function asyncFunt1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data 1")
            resolve("Congrate Success")
        }, 3000)
    })
}

function asyncFunt2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data 2")
            resolve("Congrate Success 2 data")
        }, 3000)
    })
}

// console.log("Fecthing data 1 ... ... ....")
// let a1 = asyncFunt1()
// a1.then((res) => {
//     console.log(res)
// })

// console.log("Fecthing data 2 ... ... ....")
// let a2 = asyncFunt2()
// a2.then((res) => {
//     console.log(res)
// })

// to resolve for the uperr b/c the data fetch at same time so we can fetch a2 in  a1 as entire lets go 
// console.log("fetching data 1")
// let a1 = asyncFunt1();
// a1.then((res) => {
//     console.log("fetching data 2 ")
//     let a2 = asyncFunt2();
//     a2.then((res) => {})
// })


 
  //PROMISE chanin exp on get order online from fetch a user to grt order

  //USER LOGIN SYSTERM
  function getUser(){
    return new Promise(reslove => {
      setTimeout(() => {
        console.log("User Fetch")
        reslove({id : 2 , name: "Bilal Ghafoor"})
      }, 2000)
    })
  }

  //NOW USER WHEN LOGIN THEN THEY CAN DO ORDER 
  function getOrders(userId){
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("User can Get the orders")
        resolve(["order34", "order2"])
      }, 2000);
    })
  }

  //NOW WE WANT TO GET ORDER DETAILS 
  function getOrdersDetails(order){
    return new Promise(resolve => {
     setTimeout(() => {
       console.log("User can fetch the orders")
       hello({order, status: "Delivered"})
     }, 2000);
    })
  }

  //NOW PROMISE CHAIN
  getUser()
  .then(user => {
    return getOrders(user.id)
  })
  .then(order => {
    return getOrdersDetails(order[0])
  })
  .then(details => {
    console.log("Final Result ", details)
  })
  .catch(err => {
    console.log("ERROR", err)
  })