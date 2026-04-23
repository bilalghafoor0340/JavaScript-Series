async function a1(){
    console.log("helloo")
}
a1()

// like cretea afunctionn  that can genertae  a weaer data as simple 

function api(){
    return new Promise((resolve ,reject) => {
        setTimeout(() => {
            console.log("Weather Data can e  call ")
        resolve(200)
        }, 2000)
    })
}

async function getWeatherData(){
    await api()
}
getWeatherData();

console.log("dfgiudsfjkdsbf")
console.log("dfgiudsfjkdsbf")
console.log("dfgiudsfjkdsbf")
console.log("dfgiudsfjkdsbf")