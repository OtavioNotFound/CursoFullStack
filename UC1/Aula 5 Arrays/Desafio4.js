const lojas = ["Centro", "União", "Shopping"]
const vendas = [
  [1200, 1500, 1100, 1300],
  [900, 950, 1300, 1250],
  [2100, 1900, 2000, 2600]
]

const totaisPorLoja = []
let totalGeral = 0
let maiorLoja = { nome: "", total: -Infinity }

for (let i = 0; i < lojas.length; i++) {
  let totalLoja = 0

  for (let j = 0; j < vendas[i].length; j++) {
    totalLoja += vendas[i][j]
    totalGeral += vendas[i][j]
  }

  totaisPorLoja.push({ loja: lojas[i], total: totalLoja })

  if (totalLoja > maiorLoja.total) {
    maiorLoja = { nome: lojas[i], total: totalLoja }
  }
}

console.log("Totais por loja:")
for (const item of totaisPorLoja) {
  console.log(`${item.loja}: ${item.total}`)
}

console.log(`Total geral da rede: ${totalGeral}`)
console.log(`Loja com mais vendas: ${maiorLoja.nome} (${maiorLoja.total})`)

let totalQuartaSemana = 0
for (let i = 0; i < vendas.length; i++) {
  totalQuartaSemana += vendas[i][3]
}

console.log(`Total da 4ª semana: ${totalQuartaSemana}`)
