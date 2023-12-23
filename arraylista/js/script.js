console.log('JS OK')

//--- TuttiFrutti --- \\

// 1 - abbiamo un frigorifero pieno di frutta: 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'
// 2 - c'è anche una pesca sul tavolo: mettiamola nel frigo
// 3 - stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?

// 1 - abbiamo un frigorifero pieno di frutta: 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'
const arrayFrutta = [
    'banana',
    'mela',
    'pera',
    'ciliegia',
    'arancia',
    'mandarino',
    'cocomero',
    'limone',
    'fragola']

// console.table(arrayFrutta);

// 2 - c'è anche una pesca sul tavolo: mettiamola nel frigo

arrayFrutta.push('pesca');
console.table(arrayFrutta);

// 3 - stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?

let habemusCocomero = false;
let message = 'No, il cocomero è finito';

for (let i = 0; i < arrayFrutta.length || habemusCocomero == true; i++) {
    if (arrayFrutta[i] === 'cocomero') {
        habemusCocomero == true;
        message = 'Sì, abbiamo il cocomero e possiamo utilizzarlo per fare un cocktail!'
    }
}
console.log(message);
