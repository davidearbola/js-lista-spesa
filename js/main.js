// MILESTONE 1:
// Create il vostro array con una serie di elementi.

// -   creo array e inserisco gli elementi che faranno parte dell'array (pane, latte, biscotti ecc...)

// Iterate usando un ciclo FOR per stampare ogni elemento in CONSOLE.

// -   creo ciclo FOR che mi seleziona ad ogni ciclo un elemento dell'array e lo eseguo con il console.log

// creo array
// const listaSpesa = [
//     // inserisco elementi nell'array
//     'Pane',
//     'Latte',
//     'Uova',
//     'Biscotti',
//     'Pasta',
//     'Nutella'
// ]

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
//*****************************************************************************

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
//     //stampo in pagina ogni elemento dell'array con create element ed append
//     // creo elemnto li
//     const li = document.createElement(`li`);
//     //assegno elemento (elemento della lista) all'innehtml di li
//     li.innerHTML = elemento;
//     // uso appendo dentro alla lista ul
//     ul.append(li)
// }
//*****************************************************************************


// BONUS 2:
// Sbizzarritevi e giocate con l'esercizio.

// -   inserisco in pagina delle foto di alimenti con dei button ed a ogni click sul button farò il push dell'elemento nell'array per poi eseguire il codice di prima che crea la lista della spesa

//creo array vuoto
let listaSpesa = []
let listaCarrello = []

// creo const per prendere il buttone da usare nell'event listener
const btnUova = document.getElementById(`btn-uova`);
// creo event listener del bottone 
btnUova.addEventListener(`click`, function(){
    // pusho il valore del bottone nell'array della lista spesa
    listaSpesa.push(btnUova.value);
    listaCarrello.push(btnUova.value);
    let carrello = document.getElementById(`num-cart`);
    carrello.innerHTML = listaCarrello.length;
    console.log(listaSpesa)
})
// creo stessa funzione per tutti i bottoni
const btnBiscotti = document.getElementById(`btn-biscotti`);
btnBiscotti.addEventListener(`click`, function(){
    listaSpesa.push(btnBiscotti.value);
    listaCarrello.push(btnBiscotti.value);
    let carrello = document.getElementById(`num-cart`);
    carrello.innerHTML = listaCarrello.length;
    console.log(listaSpesa)
})
const btnPasta = document.getElementById(`btn-pasta`);
btnPasta.addEventListener(`click`, function(){
    listaSpesa.push(btnPasta.value);
    listaCarrello.push(btnPasta.value);
    let carrello = document.getElementById(`num-cart`);
    carrello.innerHTML = listaCarrello.length;
    console.log(listaSpesa)
})
const btnPane = document.getElementById(`btn-pane`);
btnPane.addEventListener(`click`, function(){
    listaSpesa.push(btnPane.value);
    listaCarrello.push(btnPane.value);
    let carrello = document.getElementById(`num-cart`);
    carrello.innerHTML = listaCarrello.length;
    console.log(listaSpesa)
})
const btnNutella = document.getElementById(`btn-nutella`);
btnNutella.addEventListener(`click`, function(){
    listaSpesa.push(btnNutella.value);
    listaCarrello.push(btnNutella.value);
    let carrello = document.getElementById(`num-cart`);
    carrello.innerHTML = listaCarrello.length;
    console.log(listaSpesa)
})
const btnLatte = document.getElementById(`btn-latte`);
btnLatte.addEventListener(`click`, function(){
    listaSpesa.push(btnLatte.value);
    listaCarrello.push(btnLatte.value);
    let carrello = document.getElementById(`num-cart`);
    carrello.innerHTML = listaCarrello.length;
    console.log(listaSpesa)
})

// creo variabile per il bottone che farà mostrare il carrello
const btnCarrello = document.getElementById(`btn-carrello`)
//creo event per il bottone del carrello
btnCarrello.addEventListener(`click`, function(){
    
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
    ul.append(li);

}
    // svuoto array
    listaSpesa = [];
    // creo variabile che selezione h2 con display none
    const dNone = document.querySelector(`.d-none`);
    // tolgo classe display none 
    dNone.classList.remove(`d-none`);
})




