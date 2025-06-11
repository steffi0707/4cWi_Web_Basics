let a = 1;
let b = 2;



//Aufgabe 1
for (let index = 1; index < 3; index ++) {
    console.log("XXXX");
    if (index%1==0) {
        console.log("OOOO");
    }
}

//Aufgabe 2
let summe = 0;
for (let number = 1; number <= 100; number ++) {
    if (number%2==0) {
        summe += number;
    }
}

console.log("Die Summe ist " + summe);

//Aufgabe 3
for (let name = 1; name <=20; name ++) {
    if (name%20==0) {
        console.log(" XXXX");
        console.log("X    X");
        console.log("X    ");
        console.log("  XX");
        console.log("     X");
        console.log("X    X");
        console.log(" XXXX");
    }

}
