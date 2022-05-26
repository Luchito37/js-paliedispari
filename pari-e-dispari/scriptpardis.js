/*
Pari e Dispari
L’utente sceglie pari o dispari tramite un prompt
L’utente inserisce anche un numero da 1 a 5.
Generiamo poi un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri (quello inserito dall’utente e quello random del computer)
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. Se l’utente aveva scelto pari e la somma è pari, ha vinto l’utente, altrimenti il computer
*/

const richiestaParDis = prompt("TI SFIDOO! scegli tra pari e dispari :");

console.log(richiestaParDis)

const richiestaNumero =parseInt(prompt("....adesso scegli un numero da 1 a 5, io farò lo stesso, poi sommeremo i nostri numeri e se il risultato corrisponderà alla tua scelta iniziale VINCERAI!:")) 

console.log(richiestaNumero)

let numeroCp = Math.round(Math.random()*5);

console.log(numeroCp)

let somma = 0

somma = somma + richiestaNumero +numeroCp

console.log(somma)


function stabiliscoParDis(sommaUtente){

    let risultato = ""

    if(sommaUtente % 2 === 0){
        risultato ="pari";
    }else{
        risultato ="dispari";
    }

    return risultato;
}

stabiliscoParDis(somma);

console.log(stabiliscoParDis(somma))


function stabiliscoVincitore(sceltaInserita){
    
    let vincitore = "";

    if(sceltaInserita === "pari"){
        vincitore = "vince pari";
    }else{
        vincitore = "vince dispari";
    }

    return vincitore;
}

stabiliscoVincitore(stabiliscoParDis(somma));

console.log(stabiliscoVincitore(stabiliscoParDis(somma)))

