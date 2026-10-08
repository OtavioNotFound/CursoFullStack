function calcularFrete(item) {
  if (item.tipo === "fisico") {
    return 15
  }

  if (item.tipo === "curso") {
    return 0
  }

  if (item.tipo === "pesado") {
    return 40
  }
}

class Item {
  calcularFrete() {
    return 0
  }
}

class Fisico extends Item {
  calcularFrete() {
    return 15
  }
}

class Curso extends Item {
  calcularFrete() {
    return 0
  }
}

class Pesado extends Fisico {
  calcularFrete() {
    return 40
  }
}

const monitor = new Pesado()
const mouse = new Fisico()
const curso = new Curso()

const total = monitor.calcularFrete() + mouse.calcularFrete() + curso.calcularFrete()

console.log(total)
