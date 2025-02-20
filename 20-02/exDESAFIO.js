const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a primeira medida: ", (medida1) => {
  rl.question("Digite a segunda medida: ", (medida2) => {
    rl.question("Digite a terceira medida: ", (medida3) => {
      if (
        medida1 + medida2 > medida3 &&
        medida1 + medida3 > medida2 &&
        medida2 + medida3 > medida1
      ) {
        console.log("Triângulo feito!");
      } else {
        console.log("Triângulo falhou!");
      }

      rl.close();
    });
  });
});
