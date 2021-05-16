/*
    Dado un texto y una busqueda, censurar todas las coincidencias de la busqueda
    en el texto con [-CENSURADO]

    Si el texto y la busqueda estan vacios mostrar "No puedes leer el texto y la busqueda"
    en el caso de que ambos parametros no lleguen.

    Ejemplo:
    censorText("hola hola", "hola")

    OUTPUT:
    [-CENSURADO-] [-CENSURADO-]
*/

function censorText (sentence, wordToCensor) {
    if (!sentence && !wordToCensor) {
        return 'No puedes leer el texto y la busqueda';
    } else if (!wordToCensor) {
        return 'No puede leer texto';
    } else if (!sentence) {
        return 'No puede leer la busqueda';
    }

    //Replace no se hace de manera global y solo censura la primer palabra con la que coincida
    //Para hacerlo de manera global usar expresión regular
    let result = sentence.replace(new RegExp(wordToCensor, 'gi'), '[-CENSURADO-]')

    return result;
}

console.log(censorText('hola hola hola', 'hola'));
console.log(censorText());


