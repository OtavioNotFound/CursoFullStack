class ProdutoFisico {
  #estoque

  constructor(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    this.frete = 15
    this.#estoque = estoque
  }

  vender(qtd) {
    if (qtd <= this.#estoque) {
      this.#estoque -= qtd
      return true
    }

    return false
  }

  get estoque() {
    return this.#estoque
  }
}

class CursoOnline {
  constructor(nome, preco, link) {
    this.nome = nome
    this.preco = preco
    this.link = link
    this.frete = 0
  }

  vender() {
    return true
  }
}

class Carrinho {
  constructor() {
    this.itens = []
  }

  adicionar(item, qtd) {
    if (item.vender) {
      if (!item.vender(qtd)) {
        return false
      }
    }

    this.itens.push({ item, qtd })
    return true
  }

  subtotal() {
    let total = 0

    for (const item of this.itens) {
      total += item.item.preco * item.qtd
    }

    return total
  }

  frete() {
    let totalFrete = 0

    for (const item of this.itens) {
      totalFrete += item.item.frete * item.qtd
    }

    return totalFrete
  }

  total() {
    return this.subtotal() + this.frete()
  }
}

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

class Pedido {
  constructor(carrinho, pagamento) {
    this.carrinho = carrinho
    this.pagamento = pagamento
  }

  calcularTotalFinal() {
    return this.pagamento.calcularTotal(this.carrinho.total())
  }
}

const teclado = new ProdutoFisico("Teclado", 120, 2)
const curso = new CursoOnline("JavaScript", 0, "https://site.com/curso")

const carrinho = new Carrinho()

carrinho.adicionar(teclado, 1)
carrinho.adicionar(curso, 1)

const pedido = new Pedido(carrinho, new Pix())

console.log(carrinho.subtotal())
console.log(carrinho.frete())
console.log(pedido.calcularTotalFinal())
