const digitadas = ["123", "abc", "senac2026", "x"];
let contador = 1;
let senha;

do {
  senha = digitadas[contador - 1];
  console.log(`Tentativa ${contador} : ${senha}`);

  if (senha === "senac2026") {
    console.log("Acesso liberado");
  } else if (contador >= 3) {
    console.log("Conta bloqueada");
  }

  contador++;
} while (senha !== "senac2026" && contador <= 3);
