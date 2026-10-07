let tarefas = ["Lavar louça", "Estudar JavaScript", "Fazer exercício"];

tarefas.push("Comprar mantimentos");

const indice = tarefas.indexOf("Fazer exercício");
if (indice !== -1) {
  tarefas.splice(indice, 1);
}

tarefas.forEach((tarefa, index) => {
  console.log(`${index + 1}. ${tarefa}`);
});
