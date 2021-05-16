//Dado un numero entero, inviertelo y devuelve de nuevo el entero.

const invertedNumber = (number) => {
    let invertedNumber = parseInt(number.toString().split('').reverse().join('')) * Math.sign(number);
    return Number(invertedNumber);
}

console.log(invertedNumber(-12345));