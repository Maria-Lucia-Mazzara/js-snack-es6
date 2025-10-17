// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

console.dir(document);

const biciclette = [
  { nome: "rossa", peso: 7.5 },
  { nome: "blu", peso: 6.9 },
  { nome: "verde", peso: 8.1 },
  { nome: "arancione", peso: 6.8 },
  { nome: "nera", peso: 7.2 }
];

let bici_leggera = biciclette[0];

for (let i = 1; i < biciclette.length; i++) {
    if (bici_leggera.peso > biciclette[i].peso) {
        bici_leggera = biciclette[i];
    }
}
console.log(bici_leggera);
