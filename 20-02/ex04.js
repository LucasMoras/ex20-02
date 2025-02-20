const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual seu nome? ", (nome) => {
  rl.question("Qual seu sexo? ", (sexo) => {
    rl.question("Qual o valor de suas compras? ", (valor) => {
      if (sexo == "homem") {
        const desconto1 = valor * 0.05;
        const soma1 = valor - desconto1;
        console.log("Olá " + nome + " suas compras ficaram em: R$" + soma1);
      } else if (sexo == "mulher") {
        const desconto2 = valor * 0.15;
        const soma2 = valor - desconto2;
        console.log("Olá " + nome + " suas compras ficaram em: R$" + soma2);
      }
      rl.close();
    });
  });
});
