// Dados dos arrays, devolver array con solo los elementos comunes entre ambos.
//Ejemplos: arrayCommonElements([4,5,6,7], [7,8,9,7,5]); OUTPUT: [5,7];

function arrayCommonElements (array1, array2) {
    let arrayResult = [];

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                if (arrayResult.includes(array1[i])) continue;
                arrayResult.push(array1[i]);
            }
        }
    }

    return arrayResult;
}

console.log(arrayCommonElements([4,5,6,7,8], [7,8,8,9,7,5]));
console.log(arrayCommonElements(["helio", "angel", "Lupita"], ["helio", "helio", "angel"]));





