/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

/*
-chiedo all'utente di inserire una parola
-pusho la parola all'interno di un array
-inverto la parola 
SE la parola invertita è come la parola inserita dall'utente :
    - il risultato è una parola palindroma 
invece se non lo è :
    -il risultato è un parola semplice 
*/



const richiestaParola = prompt("inserire una parola : ")

console.log(richiestaParola);


function parolaPalindroma(parolaInserita){
        // Step 1. Usa il metodo split() per restituire un nuovo array
        const splitString = parolaInserita.split(""); // var splitString = "hello".split("");
        // si crearà di conseguenza un array i cui ad ogni lettera della parola inserita precedetemente aquisirà la posizione di un indice dell'array
    
        // Step 2. Usa il metodo reverse() per invertire l'array appena creato
        const reverseArray = splitString.reverse();

        // di conseguenza la stringa di prima invertirà gli indici
        
    
        // Step 3. Usa il metodo join() per unire tutti gli elementi della stringa in un array
        const joinArray = reverseArray.join(""); 
        
        //Step 4. Restituisci la stringa invertita
        return joinArray; 
}
    
parolaPalindroma(richiestaParola);

console.log(parolaPalindroma(richiestaParola))

let valoreParola = ""

if(richiestaParola === parolaPalindroma(richiestaParola)){
    valoreParola = "PAROLA PALINDROMA"
}else{
    valoreParola = "PAROLA SEMPLICE"
}

console.log(valoreParola)




