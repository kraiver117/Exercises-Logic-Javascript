// CuanTo es el x% de x numero //

function percentNumber(number, percent) {
    let result = number * (percent/100);
    return `El ${percent}% de ${number} es ${result}`;
}

console.log(percentNumber(897, 43));