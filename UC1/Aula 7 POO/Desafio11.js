let notas = [7, 9, 5, 8, 10, 6];
let maiorNota = notas[0];

for (let i = 1; i < notas.length; i++) {
  if (notas[i] > maiorNota) {
    maiorNota = notas[i];
  }
}

console.log(maiorNota);
