const catalogo = ["Mouse", "Teclado", "Headset", "Webcam", "Monitor", "SSD"];
const busca = "mouse";

let posicao = -1;

for (let i = 0; i < catalogo.length; i++) {
  if (catalogo[i].toLowerCase() === busca.toLowerCase()) {
    posicao = i;
    break;
  }
}

if (posicao !== -1) {
  console.log(`Encontrado na posição ${posicao}`);
} else {
  console.log("Não encontrado");
}
