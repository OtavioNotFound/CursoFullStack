class Funcionario {
  constructor(nome, salario) {
    this.nome = nome
    this.salario = salario
  }

  calcularBonus() {
    return this.salario * 0.05
  }
}

class Vendedor extends Funcionario {
  constructor(nome, salario, vendas) {
    super(nome, salario)
    this.vendas = vendas
  }

  calcularBonus() {
    return super.calcularBonus() + this.vendas * 0.02
  }
}

class Gerente extends Funcionario {
  calcularBonus() {
    return this.salario * 0.10
  }
}

const ana = new Funcionario("Ana", 2000)
const bruno = new Vendedor("Bruno", 1800, 25000)
const carla = new Gerente("Carla", 4000)

let total = 0

const equipe = [ana, bruno, carla]

for (const pessoa of equipe) {
  const bonus = pessoa.calcularBonus()
  console.log(`${pessoa.nome}: ${bonus}`)
  total += bonus
}

console.log(`Bonus total da equipe: ${total}`)
