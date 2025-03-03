if(true){
    var varVariable = 'This is true'
}

var varVariable = 'This is false' // var kann man überschreiben
console.log(varVariable)


//Let ist nur innerhalb des Statement verwendbar / const und let ist Bloxscoped und var ist functionscope
if(true){
    const constVariable = 'This is true'
    console.log(constVariable)
}

// let kann man nicht überschreiben : es erfolgt eine Fehlermeldung
/*let letVariable = 'true'
let letVariable = 'false'*/

console.log(letVariable)

//const kann man auch nicht neu zuteilen
//man kann aber die Werte darin ändern

const constVar = {name: 'Bob'}

constVar.name = 'sally'

console.log(constVar)
