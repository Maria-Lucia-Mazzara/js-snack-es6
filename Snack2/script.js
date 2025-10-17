// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

console.dir(document);


// Array di squadre con nome, punti e falli (punti e falli inizialmente 0)
const squadre = [
    { nome: 'Juventus', punti: 0, falli: 0 },
    { nome: 'Inter', punti: 0, falli: 0 },
    { nome: 'Milan', punti: 0, falli: 0 },
    { nome: 'Napoli', punti: 0, falli: 0 },
    { nome: 'Roma', punti: 0, falli: 0 }
];

// dare a ogni squadra dei valori casuali di punti e falli.
for (let i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = Math.floor(Math.random() * 100);
    squadre[i].falliSubiti = Math.floor(Math.random() * 300);
}

const risultato = [];

// Uso un ciclo for per leggere ogni squadra e inserire nel nuovo array "risultato"
// Scorro tutte le squadre una per una con l'indice i
// Per ogni squadra estraggo solo le proprietà "nome" e "falliSubiti"
// e le inserisco (push) come nuovo oggetto dentro l'array "risultato" che avevo lasciato vuota in precedenza
for (let i = 0; i < squadre.length; i++) {
  const squadra = squadre[i]; // prendo l’oggetto corrente

  risultato.push({
    nome: squadra.nome,
    falliSubiti: squadra.falliSubiti
  });
}
console.log("Tutte le squadre:", squadre);
console.log("Solo nomi e falli subiti:", risultato);