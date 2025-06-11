//Asynchrone Callbacks
function fetchData(callback) {
    console.log("Daten werden geladen...");
    setTimeout(() => {
      console.log("Daten geladen!");
      callback("Erfolgreiche Antwort");
    }, 2000); // Simuliert eine Verzögerung von 2 Sekunden
  }
  
  function processData(data) {
    console.log("Erhaltene Daten:", data);
  }
  
  // Callback übergeben
  fetchData(processData);
  