const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual o ano desejado? ", (ano) => {
  if (ano % 4 == 0) {
    console.log("Seu ano é bissexto!");
  } else {
    console.log("Ano não bissexto!");
  }
  rl.close();
});
