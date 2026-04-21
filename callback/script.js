function getData(dataId, getNextData){
    
    setTimeout(() => {
    console.log("Data received: " + dataId);
    if(getNextData){
        getNextData();
    }
    }, 2000)
}

//it is called callback hell which is difficult for developer for that (CALLBACK form a paramid structure, which is difficult to read and maintain) we can use promise and async await to solve this problem

getData(453, () => {
    console.log("get data 1......")
    getData(45435, () => {
        console.log("get data 3......")
        getData(453546578, () => {
            getData("now you are working will....")
        })
    })
})



