let numeros;
let resultado = 0;
console.log("Qual número você quer fazer a tabuada, de 1 a 10.");
process.stdin.on("data", function (data) {
  numeros = Number(data, toString().trim());
  for (let i = 1; i <= 10; i++) {
    resultado = numeros * i;
    console.log(i + "x" + numeros + " = " + resultado);
  }
});
