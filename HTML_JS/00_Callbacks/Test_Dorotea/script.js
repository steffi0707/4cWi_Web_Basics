//Aufgabe 2
function sum() {
    let sum = 0;
    for (let i = 8; i < 344; i += 2) { 
        if (i % 12 === 0) {
            sum += 3 * i; 
        } else {
            sum += i;
        }
    }
    return sum;
}

console.log(sum());

//Aufgabe 3
let data = "Super Duper".split("");
for (let i = 0; i < data.length; i++) {
    if (data[i] === "u" || data[i] === "e") {
        data[i] = "x";
    }
}

console.log(data.join("")); 

//Aufgabe 4
let num = 100;
while (num >= 25) {
    if (num !== 50 && num !== 40 && num !== 30) {
        console.log(num);
    }
    num -= 5;
}





