/*
    Dado un array, dividirlo en tantos sub-arrays como sea necesario
    basandonos en un numero que indique su tamaño.

    Dividir en arrays de X elementos.

    Example:
    arrayDivider([2,3,4,5,6], 2);

    OUTPUT:
    [[2,3], [4,5], [6]]
*/

function arrayDivider(array, numberItems) {
    let arrayResult = [];

    for (let i = 0; i < array.length; i += numberItems) {
        arrayResult.push(array.slice(i, numberItems + i));
    }

    return arrayResult;
}

console.log(arrayDivider([2,3,4,5,6,7,9,10,11,12,13,14,15], 3));