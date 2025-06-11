let banana = "Banane";
let apple = "Apple";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let WeightPerApple = 0.34;
let WeightPerBanana = 0.22;

console.log("Ein Apfel hat durchschnittlich ein Gewicht von " + WeightPerApple + " Kilo");
console.log("Eine Banane hat durchschnittlich ein Gewicht von " + WeightPerBanana + " Kilo");

//Apfel
//Äpfel pro Kilo
let result = 1 / WeightPerApple;
console.log("Preis von 1 Kilo Äpfel: " + result);

//Preis von 1 Tonne Äpfel 
result = 1000 / WeightPerApple;
console.log("Preis von 1 Tonne Äpfel: " + result);

//Preis von 8 Äpfel
result = 8 * WeightPerApple * applePricePerKilo;
console.log("Der Preis von 8 Äpfel ist " + result);


//Bananen
//Bananen pro Kilo
result = 1 / WeightPerBanana;
console.log("Preis von 1 Kilo Bananen: " + result);

//Preis von 1 Tonne Bananen 
result = 1000 / WeightPerBanana;
console.log("Preis von 1 Tonne Bananen: " + result);

//Preis von 18 Bananen
result = 17 * WeightPerBanana * bananaPricePerKilo;
console.log("Der Preis von 17 Bananen ist " + result);

    