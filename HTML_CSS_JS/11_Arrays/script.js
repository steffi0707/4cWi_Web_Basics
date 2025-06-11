//Aufgabe 1
let arr =[4,1,2,3];

console.log(arr);

arr.push(17);
arr.push(199);

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]); 
    
}

let summe = 0;
for (let index = 0; index < arr.length; index++) {
    summe += arr[index];
}
console.log(summe);

let mittelwert = 0;
for (let index = 0; index < arr.length; index++) {
    mittelwert += arr[index] / 6;
}

console.log(mittelwert);

//Aufgabe 2
let arrays = ["Susi", "Paula", "Hans"];
arrays.push('Sepp');
let output = "";
for (let index = 0; index < arrays.length; index++) {
    output += arrays[index];
    if ( (index < arrays.length - 2)) {
        output += ", ";
    }

    if (index == arrays.length - 2){
        output += " und ";
    }

}



console.log("Meine Freunde sind " + output);
