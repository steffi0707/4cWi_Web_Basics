let a = 12;
let b = 8;
let resultadd = a + b;
let resultsub = a - b;
let resultmul = a * b;
let resultcal = (a + b)/2 * a;

console.log(resultadd);
console.log(resultsub);
console.log(resultmul);
console.log(resultcal);


//Easterdate

function printEasterDate(year) {
    n = year - 1900
    a = n % 19
    b = ((7* a + 1) / 19)
    m = (11 * a + 4 - b) % 29
    q = Math.floor (n / 4)
    w = (n + q + 31 - m) % 7
    p = Math.floor (25 - m - w)

    if (p > 0) {
        console.log("Ostern ist der " + p + ". April.")
    }
    else {
        console.log("Ostern ist der" + p + 31 + ". März");
    }
}

printEasterDate(2025)