//Aufgabe 1
//Erstelle eine Funktion Decider. Decider erwartet 2 Argumente - eine Zahl und eine Callback-Funktion.
//Wenn die Zahl > 100 ist, dann rufe die Callbackfunktion auf. Ansonsten nicht.
function Decider(number, callback) {
    if (number > 100) {
      callback(); 
    } else {
      console.log("Die Zahl ist 100 oder kleiner.");
    }
  }
  
  
  function myCallback() {
    console.log("Die Zahl ist größer als 100!");
  }
  
  
  Decider(150, myCallback); 
  Decider(50, myCallback);  


  
//Aufgabe 2
//Die Funktion orderPizza nimmt den Namen der Pizza und einen Callback entgegen. 
// Sie simuliert das Bestellen der Pizza.Wenn die Pizza fertig ist wird der Callback aufgerufen. 
// Dem Callback wird ein zufälliger Preis mitgegeben.

function orderPizza(pizzaName, callback) {
    console.log(`Bestellung aufgegeben: ${pizzaName} Pizza wird zubereitet...`);
  
    setTimeout(() => {
      
      const price = (Math.random() * (20 - 10) + 10).toFixed(2);
      
      console.log(`${pizzaName} Pizza ist fertig!`);
      callback(price); 
    }, 3000); 
  }
  

  function handlePizzaReady(price) {
    console.log(`Die Pizza ist fertig! Der Preis beträgt: ${price} €.`);
  }
  

  orderPizza("Margherita", handlePizzaReady);
  
