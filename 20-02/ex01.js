const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual a velocidade do seu carro? ", (velocidade) => {
  const limite = 80;
  const valorMulta = 5;

  if (velocidade > limite) {
    const excesso = velocidade - limite;
    const multa = excesso * valorMulta;
    console.log(
      "Você ultrapassou o limite de velocidade e foi multado em: R$" + multa
    );
  } else {
    console.log("Você está dentro do limte de velocidade.");
  }
  rl.close();
});
