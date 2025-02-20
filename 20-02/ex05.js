const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual distância deseja percorrer ", (distancia) => {
  if (distancia <= 200) {
    const valor1 = distancia * 0.5;
    console.log("O valor de sua viagem ficou: R$" + valor1);
  } else if (distancia > 200) {
    const valor2 = distancia * 0.45;
    console.log("O valor de sua viagem ficou: R$" + valor2);
  }
  rl.close();
});
