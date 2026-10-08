class CartaoFidelidade {
  #pontos = 0

  adicionar(valor) {
    this.#pontos += Math.floor(valor)
  }

  get pontos() {
    return this.#pontos
  }

  resgatar(qtd) {
    if (this.#pontos >= qtd) {
      this.#pontos -= qtd
      return true
    }

    return false
  }
}

const cartao = new CartaoFidelidade()

cartao.adicionar(89.90)
console.log(cartao.pontos)

cartao.adicionar(229.90)
console.log(cartao.pontos)

console.log(cartao.resgatar(500))
console.log(cartao.resgatar(300))
console.log(cartao.pontos)

cartao.pontos = 9999
console.log(cartao.pontos)
