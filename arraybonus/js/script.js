console.log('JS OK');

// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

// ---------------------------------------------------------------------------------- \\

// 1 - Creo due array e randomizzo x e y elementi da pushare
// 2 - Inserisco una relazione tra gli array in modo tale da eguagliare gli elementi


// 1 - Creo due array e randomizzo x e y elementi da pushare
const arrayX = [];
const arrayY = [1, 2, 3, 4, 5, 6, 7];
console.log(arrayX, arrayY);

for (let i = 0; i < 20; i++) {
    const randomizationX = arrayX.push(Math.floor(Math.random() * 1000) + 1);
}
// console.log('ArrayX: ', arrayX, 'ArrayY: ', arrayY);


// 2 - Inserisco una relazione tra gli array in modo tale da eguagliare gli elementi
for (let i = 0; i < arrayX.length; i++) {
    const randomizationY = arrayY.push(Math.floor(Math.random() * 1000) + 1);
    const deleterandomizationY = arrayY.splice(arrayY.length - 1, arrayY.length - arrayX.length);
}

console.log('ArrayX: ', arrayX, 'ArrayY: ', arrayY);
