let temperaturas = [22, 25, 21, 23, 24, 26, 22];
let soma = 0;

for (let i = 0; i < temperaturas.length; i++) {
  soma += temperaturas[i];
}

let media = soma / temperaturas.length;
console.log(media);
