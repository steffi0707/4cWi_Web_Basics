//Promises
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Daten erfolgreich geladen");
      }, 2000);
    });
  }
  
  fetchData().then(data => {
    console.log(data);
  });
  