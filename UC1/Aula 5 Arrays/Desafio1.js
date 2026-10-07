const lista = [];
const itens = ["Pen drive 64GB", "Cabo HDMI", "Mousepad"];

itens.forEach((item) => lista.push(item));
lista.pop();
lista.push("Hub USB");

console.log(`Itens: ${lista.length}`);
lista.forEach((item, index) => {
  console.log(`${index + 1}. ${item}`);
});
