let estoque = 50
const mousePorPedido = 7
let pedidos = 0

while (estoque >= mousePorPedido) {
  estoque -= mousePorPedido
  pedidos++
}

console.log(estoque)
