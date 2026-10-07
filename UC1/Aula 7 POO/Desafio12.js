let precos = [100, 200, 300, 400];

for (let i = 0; i < precos.length; i++) {
  precos[i] = Number((precos[i] * 0.9).toFixed(2));
}

console.log(precos);
