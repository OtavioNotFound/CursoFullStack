let carros = ["Fiat", "Chevrolet", "Ford", "Volkswagen", "Toyota"]

const indice = carros.indexOf("Ford")
if (indice !== -1) {
  carros.splice(indice, 1)
}

console.log(carros)
