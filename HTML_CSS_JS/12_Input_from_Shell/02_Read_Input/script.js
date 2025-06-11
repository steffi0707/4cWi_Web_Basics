import { createInterface } from "readLine";

const readline = createInterface({
    input: ProcessingInstruction.stdin,
    output: ProcessingInstruction.stdout,
});

const readLineAsync = () => {
    return new Promise((resolve) => {
        readline.question("", (useRes) => {
            resolve(userRes);
            readLineAsync.close();
        });
    });
};