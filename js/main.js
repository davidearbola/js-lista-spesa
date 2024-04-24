// MILESTONE 1:
// Create il vostro array con una serie di elementi.

// -   creo array e inserisco gli elementi che faranno parte dell'array (pane, latte, biscotti ecc...)

// Iterate usando un ciclo FOR per stampare ogni elemento in CONSOLE.

// -   creo ciclo FOR che mi seleziona ad ogni ciclo un elemento dell'array e lo eseguo con il console.log

// creo array
const listaSpesa = [
    // inserisco elementi nell'array
    'Pane',
    'Latte',
    'Uova',
    'Biscotti',
    'Pasta',
    'Nutella'
]

//eseguo console.log per verificare che tutta funziona
// console.log(listaSpesa);

// creo ciclo FOR
// for (let i = 0; i < listaSpesa.length; i++) {
//     const elemento = listaSpesa[i];
//     //stampo con il console log ogni elemento grazie al ciclo for
//     console.log(`Elemento: ${elemento}, che ha come indice ${i}`)
// }

// MILESTONE 2:
// Convertite il ciclo FOR in un WHILE. Dovrete gestire il contatore manualmente.

// -   cambio il ciclo FOR con WHILE togliendo il contatore mettendolo fuori dal ciclo (sopra) e sposto l'incremento del ciclo alla fine del ciclo ma sempre dentro al ciclo

//creo variabile contatore fuori da ciclo
let i = 0
//creo ciclo while WHILE(condizione)
while (i < listaSpesa.length){
    //creo costante per salvare ogni elemento che vado a cercare
    const elemento = listaSpesa[i];
    //aggiungo contatore
    i++;
    //stampo in console ogni elemento
    console.log(`Elemento: ${elemento}, che ha come indice ${i} (ciclo While)`)
}