const nomes = ["Mouse", "Teclado", "Headset", "Webcam", "Monitor 24\""]
const valores = [49.90, 189.90, 229.90, 159.90, 899.90]

let carrinho = ["Headset", "Mouse", "Teclado", "Mouse", "Impressora"]

const indiceTeclado = carrinho.indexOf("Teclado")
if (indiceTeclado !== -1) {
  carrinho.splice(indiceTeclado, 1)
}

let total = 0

for (const item of carrinho) {
  const posicao = nomes.indexOf(item)

  if (posicao !== -1) {
    total += valores[posicao]
  }
}

const frete = total >= 600 ? 0 : 29.90

console.log(`Total da compra: R$ ${total.toFixed(2)}`)
console.log(`Frete: R$ ${frete.toFixed(2)}`)

if (frete === 0) {
  console.log("Frete grátis")
} else {
  console.log("Compra com frete")
}
