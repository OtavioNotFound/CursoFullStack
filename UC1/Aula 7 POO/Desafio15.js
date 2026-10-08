let tarefas = ["Lavar louça", "Estudar JavaScript", "Fazer exercício"]

tarefas.push("Comprar mantimentos")

const indice = tarefas.indexOf("Fazer exercício")
if (indice !== -1) {
  tarefas.splice(indice, 1)
}

for (let i = 0; i < tarefas.length; i++) {
  console.log(`${i + 1}. ${tarefas[i]}`)
}
