/* 
Enunciado:
Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres
sin usar metodos propios del lenguaje, solo estructuras de control
*/


function inverse(text) {
    let inverted = ""
    for (const world of text) {
        console.log(world);
        inverted = world + inverted;
        console.log(inverted);
    }
}

inverse('Hola');