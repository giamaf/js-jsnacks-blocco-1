// console.log('JS OK')

//--- La coda dell'array --- \\

// Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
// Stampiamo poi gli ultimi 5 elementi dell'array

// Bonus:
// Chiediamo all'utente quanti elementi dell'array dovremo stampare

//------------------------------------------------------------------------ \\ 

//todo ANALISI

//todo 1 - Creo array vuoto
//todo 2 - Chiedo all'utente quanti elementi inserire
//todo 3 - Randomizzo il numero di elementi scelto dall'utente e li inserisco nell'array
//todo 4 - Stampo gli ultimi 5 elementi dell'array

//todo 1 - Creo array vuoto
const arrayNum = [];
console.table('Array vuoto: ', arrayNum);

//todo 2 - Chiedo all'utente quanti elementi inserire e leggo il dato scelto
const userChoice = document.getElementById('select-choice');
const confirmButton = document.getElementById('confirm-button');
// console.log(userChoice, confirmButton);

confirmButton.addEventListener('click', function () {
    userChoiceValue = userChoice.value;
    console.log('Elementi array: ', userChoiceValue);

    //todo Bonus: Chiediamo all'utente quanti elementi dell'array dovremo stampare
    let printChioce = parseInt(prompt('Quanti numeri dell\'array vuoi stampare?'));

    //todo 3 - Randomizzo il numero di elementi scelto dall'utente e li inserisco nell'array
    for (let i = 0; i < userChoiceValue; i++) {
        const randomization = arrayNum.push(Math.floor(Math.random() * 100) + 1);
    }
    console.table(arrayNum);

    //todo 4 - Stampo gli ultimi 5 elementi dell'array
    console.log('Ultimi 5 elementi: ',
        arrayNum[arrayNum.length - 1],
        arrayNum[arrayNum.length - 2],
        arrayNum[arrayNum.length - 3],
        arrayNum[arrayNum.length - 4],
        arrayNum[arrayNum.length - 5]);

    //todo Stampo il numero di elementi dell'array scelti dall'utente
    if (printChioce !== 0 && !isNaN(printChioce) && printChioce <= userChoiceValue) {
        console.log('Stampa scelta dall\'utente: ',
            arrayNum.slice(0, printChioce));
    }
})
