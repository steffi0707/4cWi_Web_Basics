let p = new Promise((resolve, recejt) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Success')
    }else{
        reject('False')
    }
})

//Do this wenn it is a Success
p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => { //Do that when it failed
    console.log('This is the catch ' + message)
})