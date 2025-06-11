import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = () => {
  return new Promise((resolve) => {
    readline.question("", (userRes) => {
      resolve(userRes);
      //readline.close();
    });
  });
};

let balance = 0;
let isFinished = false;

while (!isFinished) {
  console.log("1. Einzahlen");
  console.log("2. Abheben");
  console.log("3. Kontostand");
  console.log("4. Beenden");

  console.log("Wähle eine Eingabe");
  let selection = await readLineAsync();
  console.log(selection);

  if (selection == 1) {
    console.log("Geben sie den Betrag ein dein Sie einzahlen möchten:");
    let selection = await readLineAsync();
    balance += parseFloat(selection);
    
  }

  if (selection == 2) {
    console.log("Geben sie den Betrag ein den Sie Abheben möchten:");
    let selection = await readLineAsync();
    balance -= parseFloat(selection);
  }

  if (selection == 3) {
    console.log("Der Kontostand beträgt:" + balance);
  }

  if (selection == 4) {
    isFinished = true;
    console.log("Machine is stopping!");
  }
}
readline.close();
