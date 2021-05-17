/*
    Dado un numero mostrar todos los numeros desde ese al 0 restando 8 en 8,
    en una lista con guiones y cada numero debe empezar por no.

    Example: rangeNumberToZero(100);

    //OUTPUT//
    -- From 100 to 0 --
    - no100
    - no92
    - no84
    - no76
    - no68
    - no60
    - no52
    - no44
    - no36
    - no28
    - no20
    - no12
    - no4
    --- FIN ---
*/

function rangeNumberToZero(limit) {
    let result = '';
    let counter = 0;

    result += `---From ${limit} to 0---\n`;

    for (let i = limit; i > 0 ; i -= 8) {
        counter = i;
        result += `-No ${i}\n`;
    }

    if ((counter - 8) === 0 || (counter - 8) < 0) {
        result += '-No 0\n'
    }

    result += '----FIN---'

    return result;
}

console.log(rangeNumberToZero(100));