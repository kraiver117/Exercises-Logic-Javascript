//Dado un número devolver su tabla de multiplicar completa//
//tablaMultiplicar(5);
//Output: toda la tabla de multiplicar completa

function tablaMultiplicar(numero) {
    if (!numero) return console.log('###Ingresa un valor###');

    console.log(`###Tabla del ${numero}###`);
    for (let i = 1; i <= 10 ; i++) {
        console.log(`${i} x ${numero} = ${i * numero}`);
    }
}

tablaMultiplicar(143);
