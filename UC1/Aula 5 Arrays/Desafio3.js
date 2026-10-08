const produtos = ["Mouse", "Teclado", "Headset", "Webcam", "Pen drive", "Cabo HDMI"]
const precos = [49.90, 189.90, 229.90, 159.90, 39.90, 29.90]

const promocionais = []
let total = 0

for (let i = 0; i < precos.length; i++) {
  if (precos[i] < 100) {
    promocionais.push(produtos[i])
    total += precos[i]
  }
}

console.log(`Vitrine (${promocionais.length}): ${promocionais.join(", ")}`)
console.log(`Preço total da vitrine: R$ ${total.toFixed(2)}`)
