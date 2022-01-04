/*
    Dada una cadena de texto, devolver el caracter más usado

    Example: caracterMoreUsed("Mercedez");

    OUTPUT: El caracter que más se repite es: e
*/

function characterMoreUsed(text) {
    let result = {};
    let max_repetitions = 0;
    let letter_most_repited = "";

    for (const letter of text) {
        if (!result[letter]) {
            result[letter] = 1;
        } else {
            result[letter]++;
        }
    }

    for (const letter in result) {
        if (letter.trim().length === 1 && result[letter] > max_repetitions) {
            max_repetitions = result[letter];
            letter_most_repited = letter;
        }
    }

    return letter_most_repited;
}

console.log("La letra mas repetida es:", characterMoreUsed('Mercedez               '));