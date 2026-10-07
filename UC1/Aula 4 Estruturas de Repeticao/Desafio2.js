const vendasMes = [3200, 2800, 4100, 3900, 2500, 3100, 4500, 3800, 2900, 5200, 6100, 7400];
let totalDoAno = 0;
let maisQuatroMil = [];
let melhorMes = 0;

for (let venda of vendasMes) {
    totalDoAno += venda;
    if (venda >= 4000) maisQuatroMil.push(venda);
    if (venda > melhorMes) melhorMes = venda;
}

let mediaPorMes = totalDoAno / vendasMes.length;
