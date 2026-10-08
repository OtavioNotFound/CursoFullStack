class Pagamento {
  calcularTotal(valor) {
    return valor
  }
}

class Pix extends Pagamento {
  calcularTotal(valor) {
    return Number((valor * 0.95).toFixed(2))
  }
}

class Cartao extends Pagamento {
  calcularTotal(valor) {
    return valor
  }
}

class Boleto extends Pagamento {
  calcularTotal(valor) {
    return Number((valor + 3.50).toFixed(2))
  }
}

const valorDoCarrinho = 359.60
const formas = [new Pix(), new Cartao(), new Boleto()]

for (const forma of formas) {
  console.log(`${forma.constructor.name}: ${forma.calcularTotal(valorDoCarrinho)}`)
}
