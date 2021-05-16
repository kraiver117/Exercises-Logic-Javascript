//Dados dos números, devolver cuantos números IMPARES hay entre ellos//
//Ejemplo: impares(1, 100); devuelve: 49

function getOddsNumbers (number1, number2) {
    let countOddNumber = 0;

    for (let i = number1 + 1; i < number2; i++) {
        if (i % 2 !== 0) countOddNumber++;
    }

    return countOddNumber;
}

console.log(getOddsNumbers(1, 100));