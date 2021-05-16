/*
    Dada una palabra buscarla en una frase y devolver cuantas veces aparece la frase
    y la palabra deben ser parametros de una funcion 
 */

    const searchWord = (sentence, word) => {
        let countWord = 0;
        let sentenceCleaned = sentence.toLowerCase().replace(/[!|,.-?@]/gi, '');

        if (sentenceCleaned.includes(word.toLowerCase())){
            sentenceCleaned = sentenceCleaned.split(' ');
            for (let i = 0; i < sentenceCleaned.length; i++) {
                if (sentenceCleaned[i] === word.toLowerCase()) countWord++;
            }

            console.log(`La oración "${sentence}" tiene ${countWord} ${countWord > 1 ? 'coincidencias' : 'coincidencia'} con ${word}`);
        } else {
            console.log(`La oración "${sentence}" no tiene ninguna coincidencia con ${word}`);
        }
    }

searchWord("Hola mundo, soy Angel Angel", "soys");