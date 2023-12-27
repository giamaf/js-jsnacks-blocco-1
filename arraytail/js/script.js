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


//todo 1 - Creo array vuoto
const arrayNum = [];
console.table(arrayNum);

//todo 2 - Chiedo all'utente quanti elementi inserire e leggo il dato scelto
const userChoice = document.getElementById('select-choice');
const confirmButton = document.getElementById('confirm-button');
// console.log(userChoice, confirmButton);

confirmButton.addEventListener('click', function () {
    userChoiceValue = userChoice.value;
    console.log('Numero scelto: ', userChoiceValue);

    //todo 3 - Randomizzo il numero di elementi scelto dall'utente e li inserisco nell'array
    for (let i = 0; i < userChoiceValue; i++) {
        const randomization = arrayNum.push(Math.floor(Math.random() * 100) + 1);

        if ([i] > 4) {
            console.log(arrayNum[i]);
        }

    }

    console.table(arrayNum);
})
