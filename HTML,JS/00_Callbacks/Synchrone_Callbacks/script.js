//Synchrone Callbacks
function greet(name, callback) {
    console.log("Hallo " + name + "!");
    callback();
  }
  
  function sayGoodbye() {
    console.log("Auf Wiedersehen!");
  }
  
  // Callback-Funktion übergeben
  greet("Anna", sayGoodbye);
  

  