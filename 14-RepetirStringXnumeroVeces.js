/*
    Dado un string y un numero, repetir el string tantas veces como el numero indique

    Example:
    repeatString("Angel", 2);

    OUTPU:
    AngelAngel
*/

function repeatString(string, number) {
    let stringResult = '';

    for (let i = 0; i < number; i++) {
        stringResult += string;
    }
    
    return stringResult;
}

console.log(repeatString('Angel', 2));

//Funcion con prototipo//
String.prototype.repeatMe = function (number) {
    let stringResult = '';

    for (let i = 0; i < number; i++) {
        stringResult += this;
    }
    
    return stringResult;
}

console.log("Hola Angel!".repeatMe(2));
