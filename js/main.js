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
// let i = 0
// //creo ciclo while WHILE(condizione)
// while (i < listaSpesa.length){
//     //creo costante per salvare ogni elemento che vado a cercare
//     const elemento = listaSpesa[i];
//     //aggiungo contatore
//     i++;
//     //stampo in console ogni elemento
//     console.log(`Elemento: ${elemento}, che ha come indice ${i} (ciclo While)`)
// }

// MILESTONE 3:
// Invece di stampare in console, inserite ogni elemento in pagina, magari in un <li>

// -   non eseguo più la stampa del ciclo con il console log ma stampo in pagina con innerHtml

// // creo variabile che avrà come valore la ul che ho creato in HTML
// const ul = document.querySelector(`ul`);

// //creo variabile contatore fuori da ciclo
// let i = 0
// //creo ciclo while WHILE(condizione)
// while (i < listaSpesa.length){
//     //creo costante per salvare ogni elemento che vado a cercare
//     const elemento = listaSpesa[i];
//     //aggiungo contatore
//     i++;
//     //stampo in pagina ogni elemento dell'array con innerhtml
//     ul.innerHTML += `<li>
//                         ${elemento}
//                     </li>`
// }

// BONUS 1:
// Se non l'avete già fatto prima, provate a scrivere in pagina sia tramite template literal (stringata su .innerHtml) che con il createElement (append).

// -   invece di stampare in pagina con innerhtml usero createElement con poi la funzione append per stampare la mia lista

// creo variabile che avrà come valore la ul che ho creato in HTML
const ul = document.querySelector(`ul`);

//creo variabile contatore fuori da ciclo
let i = 0
//creo ciclo while WHILE(condizione)
while (i < listaSpesa.length){
    //creo costante per salvare ogni elemento che vado a cercare
    const elemento = listaSpesa[i];
    //aggiungo contatore
    i++;
    //stampo in pagina ogni elemento dell'array con create element ed append
    // creo elemnto li
    const li = document.createElement(`li`);
    //assegno elemento (elemento della lista) all'innehtml di li
    li.innerHTML = elemento;
    // uso appendo dentro alla lista ul
    ul.append(li)
}
