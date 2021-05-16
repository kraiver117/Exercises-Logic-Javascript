/* 
    Dado un numero, mostrar una escalera con escalones de [-]
    usando el numero para los niveles de la escalera

    Ejemplo:
    escalera(4);

    OUTPUT:
    [-]
    [-][-]
    [-][-][-]
    [-][-][-][-]
*/

function stairway(number) {
    let stairwaystring = '';
    let level = 0;
    for (let i = 0; i < number; i++) {
        for (let j = 0; j <= level; j++) {
            stairwaystring += '[-]';
        }
        stairwaystring += '\n';
        level++;
    }

    return stairwaystring;
}

console.log(stairway(5));