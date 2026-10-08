const lista = []
const itens = ["Pen drive 64GB", "Cabo HDMI", "Mousepad"]

for (let i = 0; i < itens.length; i++) {
  lista.push(itens[i])
}

lista.pop()
lista.push("Hub USB")

console.log(`Itens: ${lista.length}`)

for (let i = 0; i < lista.length; i++) {
  console.log(`${i + 1}. ${lista[i]}`)
}
