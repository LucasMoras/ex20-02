const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const anosate = 18;
const anospos = 18;

rl.question("Quantos anos tem? ", (idade) => {
  if (idade < 18) {
    let diferença1 = anosate - idade;

    console.log("Faltam: " + diferença1 + " até seu alistamento!");
  } else if (idade > 18) {
    let diferença2 = idade - anospos;
    console.log(
      "Faz: " + diferença2 + " Anos que você deveria ter se alistado!"
    );
  } else {
    console.log("Você está na idade do alistamento");
  }
  rl.close();
});
