// Dados dos números indicar cual es mayor y cual es menor

function greatestLowestNumber(number1, number2) {
    if (number1 === number2) {
        return "Los numero son iguales";
    } else if (number1 > number2) {
        return `Numero Mayor ${number1} - Numero menor ${number2}`;
    } else {
        return`Numero Mayor ${number2} - Numero MENOR ${number1}`;
    }
}

console.log(greatestLowestNumber(20, 20));